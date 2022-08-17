<template>
  <main>
    <h1>IMDB</h1>
    <input
      type="text"
      v-model="search_term"
      placeholder="Search about anything"
      @keypress.enter="asyncData"
    />
    <button @click="asyncData">Search</button>
  </main>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      search_term: "",
    };
  },

  asyncData({ $axios, store }) {
    return $axios
      .$get(
        `https://api.themoviedb.org/3/search/movie?&api_key=74207837693808ec992c37ac2edfd112&query=${this.search_term}`
      )
      .then((res) => {
        store.commit("searchMovies", res.results);
        console.log(res.results);
        this.search_term = "";
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
main {
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: crimson;
  height: 5vh;
  padding: 1rem;
}
h1 {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-family: "Lobster", cursive;
}
</style>
