export const FETCH_DOGS = "dog/FETCH_DOGS"
export const FETCH_DOGS_SUCCESS = "dog/FETCH_DOGS_SUCCESS"
export const FETCH_DOGS_FAILED = "dog/FETCH_DOGS_FAILED"
export const FAVORITIZE_DOG = "dog/FAVORITIZE_DOG"

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
  | FetchDogsAction
  | FetchDogsSuccessAction
  | FetchDogsFailedAction
  | FavoritizeDogAction

export type AppActions = DogActionTypes