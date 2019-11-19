import * as actions from '../redux/actions'
import { dogReducer } from '../redux/dogReducer'
import { DogState } from '../types'
import { normalize } from 'normalizr'
import { dogListSchema } from '../redux/schemas'
import * as mock from './mockData'

const initialState: DogState = {
  currentBreed: {
    breed: '',
    entities: {
      dogs: {}
    },
    result: []
  },
  searchedBreeds: [],
  favoriteDogs: {
    dogs: {},
    result: []
  },
  allBreeds: [],
  isLoading: false
}

describe('Posts reducer', () => {
  it('should return default state', () => {
    expect(dogReducer(undefined, {} as actions.DogActionTypes)).toEqual(initialState)
  })

  it('calls FETCH_ALL_BREEDS action and returns new state', () => {
    const startAction = {
      type: actions.FETCH_ALL_BREEDS
    }
    expect(dogReducer({} as DogState, startAction)).toEqual({ isLoading: true })
  })

  it('calls FETCH_ALL_BREEDS_SUCCESS action and returns new state', () => {
    const successAction = {
      type: actions.FETCH_ALL_BREEDS_SUCCESS,
      payload: mock.fetchedAllBreeds
    }
    expect(dogReducer({} as DogState, successAction)).toEqual({ allBreeds: mock.fetchedAllBreeds, isLoading: false })
  })

  it('calls FETCH_ALL_BREEDS_FAILED action and returns new state', () => {
    const failedAction = {
      type: actions.FETCH_ALL_BREEDS_FAILED
    }
    expect(dogReducer({} as DogState, failedAction)).toEqual({ isLoading: false })
  })

  it('calls FETCH_DOGS action and returns new state', () => {
    const input = 'akita'
    const startAction = {
      type: actions.FETCH_DOGS,
      input
    }
    expect(dogReducer({} as DogState, startAction)).toEqual({ isLoading: true })
  })

  it('calls FETCH_DOGS_SUCCESS action and returns new state', () => {
    const normalizedDogs = normalize(mock.fetchedDogsAkita, dogListSchema)
    const dogs = {
      breed: 'akita',
      dogs: normalizedDogs
    }

    const successAction = {
      type: actions.FETCH_DOGS_SUCCESS,
      payload: dogs
    }
    expect(dogReducer(initialState, successAction)).toEqual(mock.payloadFetchSuccess)
  })

  it('calls FETCH_DOGS_SUCCESS action and returns new state from cache', () => {
    const normalizedDogs = normalize(mock.fetchedDogsAkita, dogListSchema)
    const dogs = {
      breed: 'akita',
      dogs: normalizedDogs
    }

    const successAction = {
      type: actions.FETCH_DOGS_SUCCESS,
      payload: dogs
    }
    expect(dogReducer(mock.payloadFetchSuccess, successAction)).toEqual(mock.payloadFetchSuccess)
  })

  it('calls FETCH_DOGS_FAILED action and returns new state', () => {
    const failedAction = {
      type: actions.FETCH_DOGS_FAILED
    }
    expect(dogReducer(mock.payloadFetchSuccess, failedAction)).toEqual({
      ...mock.payloadFetchSuccess,
      currentBreed: {
        ...mock.payloadFetchSuccess.currentBreed,
        breed: ''
      }
    })
  })

  it('calls FAVORITIZE_DOG action and returns new state with a dog favorited', () => {
    const startAction = {
      type: actions.FAVORITIZE_DOG,
      breed: 'akita',
      favorited: false,
      id: '6d480060-0571-11ea-b227-edeb30d30408',
    }
    expect(dogReducer(mock.payloadFetchSuccess, startAction)).toEqual(mock.payloadFavoritizeDogTrue)
  })

  it('calls FAVORITIZE_DOG action and returns new state with a dog unfavorited', () => {
    const successAction = {
      type: actions.FAVORITIZE_DOG,
      breed: 'akita',
      favorited: true,
      id: '6d480060-0571-11ea-b227-edeb30d30408',
    }
    expect(dogReducer(mock.payloadFavoritizeDogTrue, successAction)).toEqual(mock.payloadFavoritizeDogFalse)
  })

  it('calls FAVORITIZE_DOG action and returns new state with a dog favorited when breed it not current breed', () => {
    const startAction = {
      type: actions.FAVORITIZE_DOG,
      breed: 'akita',
      favorited: true,
      id: '6d480060-0571-11ea-b227-edeb30d30408',
    }
    expect(dogReducer(mock.payloadFavoritizeNotCurrentDogTrue, startAction)).toEqual(mock.payloadFavoritizeNotCurrentDogFalse)
  })
})
