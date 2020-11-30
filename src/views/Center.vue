<template>
<div>
  center
  <mt-header title="标题过长会隐藏">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<!-- <el-button type="primary" :loading="true">加载中</el-button> -->
<!-- <i class="el-icon-edit"></i> -->
<mt-swipe :auto="4000" id="mint-swipe">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  // beforeRouteEnter (to, from, next) {
  //   if (auth.islogin) {
  //     next('')
  //   } else {
  //     next('/login')
  //   }
  // }
}
</script>

<style lang="scss">
#mint-swipe{
  height: 200px;
  .mint-swipe-indicator.is-active{
    background:red;
}
}
</style>
