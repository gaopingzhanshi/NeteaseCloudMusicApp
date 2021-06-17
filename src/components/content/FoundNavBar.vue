<template>
  <nav-bar>
    <template v-slot:left> 
      <img src="../../assets/image/message.svg">
    </template>
    <template v-slot:center>
      <input class="search">
      </template>
    <template v-slot:right>
      <img src="../../assets/image/barmcro.svg">
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '../common/navbar/NavBar.vue'
export default {
  components: { 
      NavBar 
    },
    name:"FoundNavBar",
}
</script>

<style>

</style>