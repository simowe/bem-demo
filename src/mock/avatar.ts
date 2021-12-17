import { Movie } from '../types/Movie'

export const avatar: Movie = {
  title: 'Avatar',
  poster:
    'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_FMjpg_UX510_.jpg',

  description:
    'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
  credits: [
    { title: 'Director', name: 'James Cameron' },
    { title: 'Writer', name: 'James Cameron' },
    {
      title: 'Stars',
      name: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
    },
  ],
  genres: ['Action', 'Adventure', 'Fantasy'],
  rating: 7.8,
  runtime: '2h 42m',
  ageLimit: 'PG-13',
  year: '2009',
}
