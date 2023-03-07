<script>
import store from '../store';

export default {
    props: {
        language: String,
        title: String,
        originalTitle: String,
        rating: Number,
        imgSrc: String,

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
    <div class="image-wrapper">
        <img :src="imgSrc" alt="">
    </div>
    <div class="info-wrapper">
        <span>{{'Titolo: ' + title}}</span>
        <span>{{'Titolo Originale: ' + originalTitle}}</span>
        <span>Lingua:</span>
        <img v-if="language === 'cn'" class="flag-image" src="/china.png" alt="">
        <img v-else-if="language === 'it'" class="flag-image" src="/italy.png" alt="">
        <img v-else-if="language === 'ja'" class="flag-image" src="/japan.png" alt="">
        <img v-else-if="language === 'pt'" class="flag-image" src="/portugal.png" alt="">
        <img v-else-if="language === 'es'" class="flag-image" src="/spain.webp" alt="">
        <img v-else-if="language === 'en'" class="flag-image" src="/uk.png" alt="">
        <img v-else-if="language === 'fr'" class="flag-image" src="/france.png" alt="">
        <span v-else>{{ language }}</span>
        <span>{{'Voto: ' + rating}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.image-wrapper {
    img {
        aspect-ratio: 2/3;
        object-fit: cover;
        width: 342px;
    }
}
    .info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .flag-image {
            width: 20px;
            display: inline;
        }
    }
</style>