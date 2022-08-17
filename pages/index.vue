<template>
  <main>
    <app-header></app-header>
    <div class="movies-container">
      <div class="movies" v-for="movie in $store.state.movies" :key="movie.id">
        <movie-item :movie="movie"></movie-item>
      </div>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import MovieItem from "~/components/MovieItem.vue";
export default {
  components: { AppHeader, AppFooter, MovieItem },
  name: "IndexPage",
  asyncData({ $axios, store }) {
    return $axios
      .$get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74207837693808ec992c37ac2edfd112"
      )
      .then((res) => {
        store.commit("getMovies", res.results);
      });
  },
};
</script>
<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap !important;
}
</style>
