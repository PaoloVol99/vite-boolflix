import { reactive } from 'vue'

const store = reactive({
    apiKey: '51b46be8e0b1d65020ba814503688335',
	movies: [],
    tv: [],
    tvShow: {},
    movie: {},
    language: '',
    rating: '',
    title: '',
    originalTitle: '',
    search: '',
    imagePath: 'https://image.tmdb.org/t/p/',
    imageSize: 'w342',
    imageNotFound: '/notfound.webp',
    castBasePath: 'https://api.themoviedb.org/3/movie/'
})

export default store