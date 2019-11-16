import { Reducer } from 'redux'
import { DogState, Breed } from '../types'
import { DogActionTypes, FETCH_DOGS, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILED, FAVORITIZE_DOG } from './actions'
import { normalize } from 'normalizr'

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
  isLoading: false,
}

export const dogReducer: Reducer<DogState> = (state = initialState, action): DogState => {
  switch (action.type) {
    default:
      return state
  }
}