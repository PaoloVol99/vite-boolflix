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
    .row {
        color: white;
        justify-content: space-between;
        align-items: center;
    }
}

</style>