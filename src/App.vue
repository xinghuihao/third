<template>
  <div>
     <tabbar v-show='isTabbarShow'></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
// import bus from '@/bus'
export default {
  data () {
    return {
      // iShow: true
    }
  },
  mounted () {
    // bus.$on('maizuo', (data) => {
    // console.log('通知maizuo', data)
    // this.iShow = data
    // })
  },
  // computed:{
  //   isShow(){
  //     return this.$store.state.isTabbarShow
  //   }
  // }，

  // computed: mapState(['isTabbarShow']),
  computed: {
    ...mapState(['isTabbarShow'])
  },
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
html{
  height: 100%;
}
 li{
  list-style: none;
}
</style>
