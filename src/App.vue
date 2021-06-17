<template>
  <div id="app">
  <router-view/>
  <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from './components/content/mainTabbar/mainTabBar.vue'
export default {
  components: { mainTabBar },
name:"app",
}
</script>

<style>

</style>