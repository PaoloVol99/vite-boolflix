<script>
import store from '../store';
import axios from 'axios';

export default {
    props: {
        language: String,
        title: String,
        originalTitle: String,
        rating: Number,
        imgSrc: String,
        overview: String,
        id: {
            type: Number,
            required: true
        },

    },
    data() {
        return {
            store,
            cast: [],
            flags: ['en', 'ja', 'pt', 'es', 'cn', 'it', 'fr'],
        }
    },
    // watch: {
    //     id(newVal, oldVal) {
    //         this.fetchShowCast(this.id) 
    //     }
    // },
    created() {
        axios
            .get(`${this.store.castBasePathTv + this.id}/credits`, 
            {
                params: {
                    api_key: this.store.apiKey,
                    language: 'it-IT'
                }
            })
            .then((res) => {
                console.log(res.data.cast)
                this.cast = res.data.cast
            })
    },
    computed: {
        ratingRounded() {
            return Math.round(this.rating / 2)
        }
    },
    methods: {
        langFlags() {
            switch (this.language) {
                case 'cn': 
                    return '/china.png';
                case 'it':
                    return '/italy.png';
                case 'ja':
                    return '/japan.png';
                case 'pt':
                    return '/portugal.png';
                case 'es':
                    return '/spain.webp';
                case 'en':
                    return '/uk.png';
                case 'fr':
                    return '/france.png';
            }   
        },
        // fetchShowCast(showId) {
        //     axios
        //     .get(`${this.store.castBasePathTv + showId}/credits`, 
        //     {
        //         params: {
        //             api_key: this.store.apiKey,
        //             language: 'it-IT'
        //         }
        //     })
        //     .then((res) => {
        //         console.log(res.data.cast)
        //         this.cast = res.data.cast
        //     })
        // }
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
        <div class="language">
            <span>Lingua:</span>
            <img v-if="flags.includes(language)" class="flag-image" :src="langFlags()" alt="">
            <!-- <img v-else-if="language === 'it'" class="flag-image" src="/italy.png" alt="">
            <img v-else-if="language === 'ja'" class="flag-image" src="/japan.png" alt="">
            <img v-else-if="language === 'pt'" class="flag-image" src="/portugal.png" alt="">
            <img v-else-if="language === 'es'" class="flag-image" src="/spain.webp" alt="">
            <img v-else-if="language === 'en'" class="flag-image" src="/uk.png" alt="">
            <img v-else-if="language === 'fr'" class="flag-image" src="/france.png" alt=""> -->
            <span v-else>{{ language }}</span>
        </div>
        <div class="rating">
            <span>Voto:</span>
            <span v-if="ratingRounded === 0">Nessun voto</span>
            <font-awesome-icon v-for="star in ratingRounded" class="star" icon="fa-solid fa-star" />
        </div>
        <div class="cast">
            <span class="cast-title">Cast:</span>
            <span v-for="(actor, i) in cast" :key="i">
                <span v-if="i <= 4">{{ i !== (cast.length - 1) && i !== 4 ? actor.name + ', ' : actor.name + '.' }}</span>
            </span>
        </div>
        <div class="overview">
            {{ overview }}
        </div>
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

.content-wrapper {
    position: relative;
    overflow: auto;

    &:hover .info-wrapper {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        background-color: rgba($color: black, $alpha: 0.9);
    }
}
.info-wrapper {
        display: none;
        flex-direction: column;
        gap: 10px;
        padding: 10px;

        .language {
            display: flex;
            align-items: center;
            gap: 5px;
            .flag-image {
                width: 20px;
                display: inline;
            }
        }
        .rating {
            display: flex;
            gap: 5px;
            .star {
                color: yellow;
                align-self: flex-start;
            }
        }
        .overview {
            padding-top: 10px;
            border-top: 1px solid white;
        }
        .cast {
            .cast-title {
                margin-right: 5px;
            }
        }
    }
</style>