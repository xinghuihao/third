<template>
    <div>
        <div>
          <img :src='filterinfo.poster' style="width:100%"/>
          <h2>{{filterinfo.name}}</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import bus from '@/bus'
// var bus = new Vue();
export default {
  data () {
    return {
      filterinfo: null
    }
  },
  props: ['id'],
  beforeMount () {
    // console.log('hidder')
    // bus.$emit('maizuo', false)
    this.$store.commit('Hidemaizuo', false)
  },
  mounted () {
    console.log(this.$route.params.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=3537339`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"510100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filterinfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // console.log('get')
    // bus.$emit('maizuo', true)
    this.$store.commit('Showmaizuo', true)
  }
}
</script>
