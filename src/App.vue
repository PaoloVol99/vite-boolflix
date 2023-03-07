<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader,
    AppMain,
  }

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
