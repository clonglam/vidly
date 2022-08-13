export interface MovieSchema {
  _id: string
  title: string
  genre: GenresSchema
  numberInStock: number
  dailyRentalRate: number
}

export interface GenresSchema {
  _id: string
  name: string
}
