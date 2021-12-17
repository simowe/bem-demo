export interface Movie {
  title: string
  poster: string
  description: string
  credits: {
    title: string
    name: string
  }[]
  genres: string[]
  rating: number
  runtime: string
  ageLimit: string
  year: string
}
