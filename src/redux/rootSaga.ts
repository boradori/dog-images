import { put, all, call, takeLatest } from 'redux-saga/effects'
import * as Api from './api'
import { FetchDogsAction, FETCH_DOGS, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILED } from './actions'
import { normalize } from 'normalizr'
import { dogListSchema } from './schemas'
const uuidv1 = require('uuid/v1') // timestamp

export function* fetchDogs(action: FetchDogsAction) {
  try {
    const breedName = action.input
    const fetchedDogs = yield call(Api.fetchDogs, breedName.toLocaleLowerCase())
    const firstTenDogs = yield fetchedDogs.message.slice(0, 10) // do we need yield here?
    const firstTenDogsWithFavorite = yield firstTenDogs.map((url: string) => {
      return { id: uuidv1(), breed: breedName.toLocaleLowerCase(), imageUrl: url, favorited: false }
    })
    const normalizedDogs = normalize(firstTenDogsWithFavorite, dogListSchema)
    const dogs = { breed: breedName.toLocaleLowerCase(), dogs: normalizedDogs }

    yield put ({ type: FETCH_DOGS_SUCCESS, payload: dogs })
  } catch (error) {
    yield put({ type: FETCH_DOGS_FAILED, error })
  }
}
export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_DOGS, fetchDogs)
  ])
}