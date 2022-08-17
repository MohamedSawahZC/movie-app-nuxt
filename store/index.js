export const state = () => ({
  movies: []
})

export const mutations = {
  getMovies(state, movies) {
    state.movies = movies;
  },
  searchMovies(state, movies) {
    state.movies = movies;
  }
}
