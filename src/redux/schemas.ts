import { schema } from 'normalizr'

const dogs = new schema.Entity('dogs')
export const dogListSchema = new schema.Array(dogs)

export const dogSchema = new schema.Entity('dog')