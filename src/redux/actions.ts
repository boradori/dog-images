export const FETCH_ALL_BREEDS = "dog/FETCH_ALL_BREEDS"
export const FETCH_ALL_BREEDS_SUCCESS = "dog/FETCH_ALL_BREEDS_SUCCESS"
export const FETCH_ALL_BREEDS_FAILED = "dog/FETCH_ALL_BREEDS_FAILED"
export const FETCH_DOGS = "dog/FETCH_DOGS"
export const FETCH_DOGS_SUCCESS = "dog/FETCH_DOGS_SUCCESS"
export const FETCH_DOGS_FAILED = "dog/FETCH_DOGS_FAILED"
export const FAVORITIZE_DOG = "dog/FAVORITIZE_DOG"

export interface FetchAllBreedsAction {
  type: typeof FETCH_ALL_BREEDS
}

export interface FetchAllBreedsSuccessAction {
  type: typeof FETCH_ALL_BREEDS_SUCCESS
  payload: Array<string>
}

export interface FetchAllBreedsFailedAction {
  type: typeof FETCH_ALL_BREEDS_FAILED
}

export interface FetchDogsAction {
  type: typeof FETCH_DOGS
  input: string
}

interface NormalizedDogs {
  breed: string
  dogs: {
    result: any
    entities: object
  }
}

export interface FetchDogsSuccessAction {
  type: typeof FETCH_DOGS_SUCCESS
  payload: NormalizedDogs
}

export interface FetchDogsFailedAction {
  type: typeof FETCH_DOGS_FAILED
}

export interface FavoritizeDogAction {
  type: typeof FAVORITIZE_DOG
  breed: string
  id: string
  favorited: boolean
}

export const fetchAllBreeds = (): FetchAllBreedsAction => ({
  type: FETCH_ALL_BREEDS
})

export const fetchAllBreedsSuccess = (breeds: string[]): FetchAllBreedsSuccessAction => ({
  type: FETCH_ALL_BREEDS_SUCCESS,
  payload: breeds
})

export const fetchAllBreedsFailed = (): FetchAllBreedsFailedAction => ({
  type: FETCH_ALL_BREEDS_FAILED
})

export const fetchDogs = (input: string): FetchDogsAction => ({
  type: FETCH_DOGS,
  input
})

export const fetchDogsSuccess = (dogs: NormalizedDogs): FetchDogsSuccessAction => ({
  type: FETCH_DOGS_SUCCESS,
  payload: dogs
})

export const fetchDogsFailed = (): FetchDogsFailedAction => ({
  type: FETCH_DOGS_FAILED,
})

export const favoritizeDog = (breed: string, id: string, favorited: boolean): FavoritizeDogAction => ({
  type: FAVORITIZE_DOG,
  breed: breed,
  id: id,
  favorited: favorited
})

export type DogActionTypes =
  | FetchAllBreedsAction
  | FetchAllBreedsSuccessAction
  | FetchAllBreedsFailedAction
  | FetchDogsAction
  | FetchDogsSuccessAction
  | FetchDogsFailedAction
  | FavoritizeDogAction

export type AppActions = DogActionTypes