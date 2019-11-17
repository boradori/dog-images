export interface Dog {
  id: string
  breed: string
  imageUrl: string
  favorited: boolean
}

export interface Breed {
  breed: string
  entities: {
    dogs?: {
      [key: string]: Dog
    }
  }
  result: Array<string>
}

export interface FavoriteDogs {
  dogs: {
    [key: string]: Dog
  }
  result: Array<string>
}

export interface DogState {
  readonly currentBreed: Breed
  readonly searchedBreeds: Array<Breed>
  readonly favoriteDogs: FavoriteDogs
  readonly allBreeds: Array<string>
  readonly isLoading: boolean
}

export interface AppState {
  readonly dogReducer: DogState
}