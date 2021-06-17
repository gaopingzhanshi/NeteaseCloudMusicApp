<template>
  <div class="rcommend">
      <div class="flex">
          <img src="../../../assets/image/everyday.svg">
         <div>每日推荐</div> 
          </div>
      <div class="flex">
        <img src="../../../assets/image/radio.svg">
          <div>私人FM</div> 
          </div>
      <div class="flex">
        <img src="../../../assets/image/songlist.svg">
          <div>歌单</div> 
          </div>
      <div class="flex">
        <img src="../../../assets/image/board.svg">
         <div> 排行榜</div>
         </div>
      <div class="flex">
        <img src="../../../assets/image/living.svg">
          <div>直播</div> 
          </div>
  </div>
  <hr>
</template>

<script>
export default {
    name:"Rcommend",
}
</script>

<style>
.rcommend{
    display: flex;
    margin-top: 10px;
}
.rcommend img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
.flex{
    flex: 1;
    text-align: center;
    font-size: 12px;
    }
</style>