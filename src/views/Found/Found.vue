<template>
  <found-nav-bar/>
  <ele-swiper :banner="banner"/>
  <rcommend></rcommend>
  
</template>

<script>
import{
    getBanner
}from "../../network/discover"

import NavBar from "../../components/common/navbar/NavBar.vue";
import FoundNavBar from '../../components/content/FoundNavBar.vue';
import EleSwiper from './childxomps/EleSwiper.vue';
import Rcommend from './childxomps/Rcommend.vue';
export default {
  name: "Found",
  data(){
    return{
      banner: [],
    };
  },
  components: { 
    NavBar,
    FoundNavBar,
    EleSwiper,
    Rcommend 
  },
  created(){
    getBanner().then(res => {
      this.banner = res.data.banners.slice(0, 3);
    });
  },
  
  
  
};
</script>

<style>
  .search{
    /* display: flex; */
    width: 95%;
    height: 18px;
    background: rgb(255, 255, 255);
    border: 1px solid #eee;
    border-radius: 15px;
    
    
  }
</style>