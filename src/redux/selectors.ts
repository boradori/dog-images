import { createSelector } from 'reselect'
import { AppState, DogState } from '../types'

export const getDogState = (state: AppState) => state.dogReducer

export const getAllBreeds = createSelector(
  getDogState,
  (dogState: DogState) => {
    return dogState.allBreeds
  }
)

export const getCurrentBreed = createSelector( // not for performance optimization
  getDogState,
  (dogState: DogState) => {
    return dogState.currentBreed
  }
)

export const getFavoriteDogs = createSelector( // not for performance optimization
  getDogState,
  (dogState: DogState) => {
    return dogState.favoriteDogs
  }
)