import { DogState, Breed } from '../types'
import produce from "immer"
import { Reducer } from 'redux'
import { DogActionTypes, FETCH_ALL_BREEDS, FETCH_ALL_BREEDS_SUCCESS, FETCH_ALL_BREEDS_FAILED, FETCH_DOGS, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILED, FAVORITIZE_DOG } from './actions'
import { normalize } from 'normalizr'
import { dogSchema } from './schemas'

export const initialState: DogState = {
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
  isLoading: false,
}

export const dogReducer: Reducer<DogState> = (state = initialState, action: DogActionTypes): DogState => {
  switch (action.type) {
    case FETCH_ALL_BREEDS:
      return { ...state, isLoading: true }
    case FETCH_ALL_BREEDS_SUCCESS:
      const breeds = action.payload

      return {
        ...state,
        allBreeds: breeds,
        isLoading: false
      }
    case FETCH_ALL_BREEDS_FAILED:
      return { ...state, isLoading: false }
    case FETCH_DOGS:
      return { ...state, isLoading: true }
    case FETCH_DOGS_SUCCESS:
      const breed = state.searchedBreeds.find((breed: Breed) => breed.breed === action.payload.breed)

      if (breed === undefined) {
        const newCurrentBreed = {
          breed: action.payload.breed,
          ...action.payload.dogs
        }

        const newSearchedBreeds = produce(state.searchedBreeds, draft => {
          draft.push(newCurrentBreed)
        })

        return {
          ...state,
          currentBreed: newCurrentBreed,
          searchedBreeds: newSearchedBreeds,
          isLoading: false
        }
      } else {
        return {
          ...state,
          currentBreed: breed,
          isLoading: false
        }
      }

    case FETCH_DOGS_FAILED:
        return {
          ...state,
          currentBreed: {
            ...state.currentBreed,
            breed: ''
          },
          isLoading: false
        }

    case FAVORITIZE_DOG:
      const breedFromCache = state.searchedBreeds.find((breed: Breed) => breed.breed === action.breed)!
      const selectedDog = breedFromCache.entities.dogs![action.id]
      const newDog = { id: selectedDog.id, breed: selectedDog.breed, imageUrl: selectedDog.imageUrl, favorited: !action.favorited }
      const normalizedDog = normalize(newDog, dogSchema)
      
      // for currentBreed & searchedBreeds
      const newBreed = produce(breedFromCache, draft => {
        draft.entities.dogs![action.id] = newDog
      })

      // for searchedBreeds
      const indexOfBreedFromCache = state.searchedBreeds.findIndex(breed => breed.breed === breedFromCache.breed)
      const newSearchedBreeds = produce(state.searchedBreeds, draft => {
        draft[indexOfBreedFromCache] = newBreed
      })

      // for favoriteDogs
      const newFavoriteDogs = produce(state.favoriteDogs, draft => {
        if (normalizedDog.entities.dog[selectedDog!.id].favorited) {
          draft.result.push(normalizedDog.result)
          draft.dogs[normalizedDog.result] = normalizedDog.entities.dog[normalizedDog.result]
        } else {
          const index = draft.result.findIndex(result => result === normalizedDog.result)
          draft.result.splice(index, 1)
          delete draft.dogs[normalizedDog.result]
        }
      })

      if (action.breed === state.currentBreed.breed) {
        return {
          ...state,
          currentBreed: newBreed,
          favoriteDogs: newFavoriteDogs,
          searchedBreeds: newSearchedBreeds,
          isLoading: false
        }
      } else {
        return {
          ...state,
          favoriteDogs: newFavoriteDogs,
          searchedBreeds: newSearchedBreeds,
          isLoading: false
        }
      }

    default:
      return state
  }
}
