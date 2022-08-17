<template>
  <main>
    <img :src="before_url + movie.poster_path" alt="" />
    <h3>{{ movie.title }}</h3>
    <h5>{{ movie.vote_average }}</h5>
  </main>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  data() {
    return {
      before_url: "https://image.tmdb.org/t/p/original",
    };
  },
};
</script>

<style scoped>
main {
  width: 16rem;
  border: 1px solid white;
  border-radius: 5px;
  margin: 20px;
  background-color: white;
}
img {
  width: 16rem;
  border-radius: 5px;
}
h3,
h5 {
  position: relative;
  text-align: center;
  color: black;
}
h5 {
  color: orange;
}
</style>
