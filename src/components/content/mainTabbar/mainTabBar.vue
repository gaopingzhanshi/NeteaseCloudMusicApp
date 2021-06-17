// 这是首页底部导航栏
<template>
  <tab-bar>
      <tab-bar-item path="/found">
        //当处于不活跃状态时候，显示灰色图标

        <template v-slot:icon>
          <img  src="../../../assets/image/newfound.svg" alt="">
        </template>
        //当处于活跃状态时候，显示红色图标

        <template v-slot:icon-active>
        <img  src="../../../assets/image/redfound.svg" alt="">
        </template>
        <template v-slot:text>发现</template>
      </tab-bar-item>

      <tab-bar-item path="/live">
        <template v-slot:icon>
          <img src="../../../assets/image/live.svg" alt="">
          </template>
          <template v-slot:icon-active>
        <img  src="../../../assets/image/redlive.svg" alt="">
        </template>
        <template v-slot:text>播客</template>
      </tab-bar-item>

      <tab-bar-item path="/mymusic">
        <template v-slot:icon>
          <img src="../../../assets/image/music.svg" alt="">
        </template>
        <template v-slot:icon-active>
        <img   src="../../../assets/image/redmusic.svg" alt="">
        </template>
        <template v-slot:text>我的</template>
      </tab-bar-item>

      <tab-bar-item path="/singsong">
        <template v-slot:icon>
          <img src="../../../assets/image/mcro.svg" alt="">
        </template>
        <template v-slot:icon-active>
        <img  slot="icon-active" src="../../../assets/image/redmcro.svg" alt="">
        </template>
        <template v-slot:text>k歌</template>
      </tab-bar-item>
      <tab-bar-item path="/cloudvia">
        <template v-slot:icon>
          <img src="../../../assets/image/mine.svg" alt="">
        </template>
        <template v-slot:icon-active>
        <img  slot="icon-active" src="../../../assets/image/redmine.svg" alt="">
        </template>
        <template v-slot:text>云村</template>
      </tab-bar-item>
  </tab-bar>
  
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
    
export default {
  components: { TabBar, TabBarItem },
    name:"mainTabBar",
}
</script>

<style>
    
</style>