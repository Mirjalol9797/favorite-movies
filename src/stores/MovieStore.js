import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

// export const useMovieStore = defineStore("movieStore", {
//   state: () => ({
//     movies: [],
//     activeTab: 2,
//   }),
//   getters: {
//     watchedFilms() {
//       return this.movies.filter((item) => item.isWatched);
//     },
//     totalCountMovies() {
//       return this.movies.length;
//     },
//     // watchedFilms: (state) => state.movies.filter((item) => item.isWatched),
//   },
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id;
//     },
//     toggleWatched(id) {
//       const idx = this.movies.findIndex((el) => el.id === id);
//       this.movies[idx].isWatched = !this.movies[idx].isWatched;
//     },
//     deleteMovie(id) {
//       this.movies = this.movies.filter((item) => item.id !== id);
//     },
//   },
// });

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(1);

  const moviesInLocaleStorage = localStorage.getItem("movies");
  if (moviesInLocaleStorage) {
    movies.value = JSON.parse(moviesInLocaleStorage)._value;
  }

  const watchedFilms = computed(() => {
    return movies.value.filter((el) => el.isWatched);
  });

  const totalCountMovies = computed(() => movies.value.length);

  const setActiveTab = (id) => {
    activeTab.value = id;
  };

  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    movies,
    activeTab,
    watchedFilms,
    totalCountMovies,
    setActiveTab,
    toggleWatched,
    deleteMovie,
  };
});
