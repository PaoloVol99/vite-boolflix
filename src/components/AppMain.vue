<script>
import axios from 'axios'
import MovieComponent from './MovieComponent.vue';
import ShowComponent from './ShowComponent.vue';
import store from '../store'

export default {
    components: {
        MovieComponent,
        ShowComponent,
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
            this.fetchTvShows()
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
                // this.store.language = res.data.results.original_language
                // this.store.title = res.data.results.original_language
                // this.store.originalTitle = res.data.results.original_language
                // this.store.rating = res.data.results.original_language
            })
        },
        fetchTvShows() {
            axios
            .get('https://api.themoviedb.org/3/search/tv?api_key=51b46be8e0b1d65020ba814503688335&language=it_IT',
            {
                params: {
                    query: this.store.search
                }
            })
            .then((res) => {
                this.store.tv = res.data.results
            })
        },
        // fetchCast(id) {
        //     axios
        //     .get(`${this.store.castBasePath + id}/credits`, 
        //     {
        //         params: {
        //             api_key: this.store.apiKey,
        //             language: 'it-IT'
        //         }
        //     })
        //     .then((res) => {
        //         console.log(res.data.cast)
        //     })
        // }
    }
}
</script>

<template>
  <main>
    <div class="container">
        <div class="row">
            <span v-if="store.movies.length > 0" class="category-title">Film</span>
            <div v-for="(movie, i) in store.movies" :key="movie.id" class="col">
                <MovieComponent :language="movie.original_language" :rating="movie.vote_average" :original-title="movie.original_title" :title="movie.title" :img-src="movie.poster_path !== null ? store.imagePath + store.imageSize + movie.poster_path : store.imageNotFound" :overview="movie.overview" :id="movie.id" />
            </div>
            <span v-if="store.tv.length > 0" class="category-title">Serie Tv</span>
            <div v-for="(show, i) in store.tv" :key="show.id" class="col">
                <ShowComponent :language="show.original_language" :rating="show.vote_average" :original-title="show.original_name" :title="show.name" :img-src="show.poster_path !== null ? store.imagePath + store.imageSize + show.poster_path : store.imageNotFound" :overview="show.overview" :id="show.id"  />
            </div>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
    color: white;
    padding: 10px 0;
    .row {
        margin: 0 -10px;
        .category-title {
            width: 100%;
            padding: 0 10px;
            font-size: 32px;
            font-weight: 600;
            margin: 20px 0;
        }
        .col {
            width: calc(100% / 4);
            padding: 10px;
        }
    }
}

</style>