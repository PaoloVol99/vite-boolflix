<script>
import axios from 'axios'
import MovieComponent from './MovieComponent.vue';
import store from '../store'

export default {
    components: {
        MovieComponent
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        searchInput() {
            return this.store.search
        }
    },
    watch: {
        searchInput(newVal, oldVal) {
            this.fetchMovies()
        }
    },
    methods: {
        fetchMovies() {
            axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=51b46be8e0b1d65020ba814503688335&language=it_IT`,
            {
                params: {
                    query: this.store.search
                }
            })
            .then((res) => {
                console.log(res.data)
                this.store.movies = res.data.results
                console.log(this.store.movies)
                this.store.language = res.data.results.original_language
                this.store.title = res.data.results.original_language
                this.store.originalTitle = res.data.results.original_language
                this.store.rating = res.data.results.original_language
            })
        }
    }
}
</script>

<template>
  <main>
    <div class="container">
        <div class="row">
            <div v-for="(movie, i) in store.movies" :key="i" class="col">
                <MovieComponent :movie="movie" :language="movie.original_language" :rating="movie.vote_average" :original-title="movie.original_title" :title="movie.title" />
            </div>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
    color: white;
    .col {
        width: calc(100% / 4);
    }
}

</style>