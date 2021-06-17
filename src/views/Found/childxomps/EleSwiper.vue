<template>
  <div class="swiper">
  <el-carousel  height="150px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="item.imageUrl" class="ima">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
    name:'EleSwiper',
    props:{
      banner:{
        type:Array,
        default(){
            return[]
        }
      }
    }
}
</script>

<style>
  .swiper{
    background-color: rgb(231, 230, 230);
  }
.ima{
  width: 100%;
  height: 100%;
}
</style>