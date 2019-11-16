const dogceoURL: string = `https://dog.ceo/api/breed/`

export const fetchDogs = async (breedName: string) => {
  const response = await fetch(`${dogceoURL}${breedName}/images`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data
}