import { reactive } from 'vue'

const store = reactive({
	movies: [],
    movie: {},
    language: '',
    rating: '',
    title: '',
    originalTitle: '',
    search: '',
})

export default store