<script>
import store from '../store'
export default {
    data() {
        return {
            store,
            search: '',
        }
    },
    methods: {
        searchStart() {
            this.store.search = this.search
        }
    }
}
</script>

<template>
  <header class="main-header">
    <div class="container row">
        <h1>boolflix</h1>
        <input @keyup.enter="searchStart" v-model="search" type="text" placeholder="Cerca un film...">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
    background-color: rgb(34, 34, 34);
    padding: 20px;
    .row {
        justify-content: space-between;
        align-items: center;
        gap: 200px;

        h1 {
            font-size: 40px;
            text-transform: uppercase;
            color: red;
        }

        input {
            padding: 10px;
            background-color: rgb(90, 90, 90);
            color: white;
            border: none;
            border-radius: 6px;
            flex-grow: 1;
        }
    }
}

</style>