<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <div
        class="btn"
        :class="movieStore.activeTab === 1 ? 'btn_green' : ''"
        @click="changeTab(1)"
      >
        Favorite
      </div>
      <div
        class="btn"
        :class="movieStore.activeTab === 2 ? 'btn_green' : ''"
        @click="changeTab(2)"
      >
        Search
      </div>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>Watched movies (count: {{ movieStore.watchedFilms.length }})</h3>
      <Movie
        v-for="(movie, index) in movieStore.watchedFilms"
        :key="index"
        :movie="movie"
      />
      <h3>All movies (count: {{ movieStore.totalCountMovies }})</h3>
      <Movie
        v-for="(movie, index) in movieStore.movies"
        :key="index"
        :movie="movie"
      />
    </div>
    <div class="search" v-else>
      <Search />
    </div>
  </main>
</template>

<script setup>
import Search from "./components/Search.vue";
import Movie from "./components/Movie.vue";
import { useMovieStore } from "./stores/MovieStore";

const movieStore = useMovieStore();

const changeTab = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
