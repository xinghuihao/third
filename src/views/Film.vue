<template>
<div>
<filmheader :class="isFixed?'fixed':''" ref="myfile"></filmheader>
<router-view></router-view>
</div>
</template>

<script>
import filmheader from '@/views/film/filmheader'
// import swiper from '@/views/film/Swiper'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    filmheader
  },
  mounted () {
    window.onscroll = this.handhandleScroll
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    window.onscroll = null
  },
  methods: {
    handhandleScroll () {
      // console.log(document.documentElement.scrollTop, this.$refs.myfile.$el.offsetHeight)
      // console.log(1111)
      if (document.documentElement.scrollTop >= this.$refs.myfile.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }

}
</script>
