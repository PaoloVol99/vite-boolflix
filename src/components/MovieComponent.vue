<script>
import store from '../store';

export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
        language: String,
        title: String,
        originalTitle: String,
        rating: Number,

    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template>
  <div class="content-wrapper">
    <div>
        <img src="" alt="">
    </div>
    <div class="info-wrapper">
        <span>{{'Titolo: ' + title}}</span>
        <span>{{'Titolo Originale: ' + originalTitle}}</span>
        <span>{{'Lingua: ' + language}}</span>
        <span>{{'Voto: ' + rating}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px
    }
</style>