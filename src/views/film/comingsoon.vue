<template>
    <div>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check='false'
        ref="mylist">
        <li v-for="data in datalist" :key="data.filmId" @click='handlechange(data.filmId)'>
            <img :src="data.poster">
            <h3>{{data.name}}</h3>
            <p v-if='data.grade'>观众评分{{data.grade}}</p>
             <p v-else>暂无评分</p>
             <br/>
            <p>主演：{{data.actors | actorfilter }}</p>
            <p>{{data.nation}}|{{data.runtime}}分钟</p>
        </li>
    </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Indicator, InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.filter('actorfilter', function (data) {
  var newlist = data.map(item => item.name)
  // console.log(newlist.join(' '))
  return newlist.join(' ')
})

export default {
  data () {
    return {
      datalist: [],
      isFixed: false,
      loading: false,
      current: 1,
      total: 0,
      ishow: true
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    // axios.get('https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=1193921').then(res => {
    //   console.log(res.data)
    // })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=1086440',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"510100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      Indicator.close()
    })
  },
  methods: {
    handlechange (id) {
      console.log(id)
      // 编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`)

      // 编程式导航-名字跳转
      this.$router.push({ name: 'detail', params: { id: id } })
    },
    loadMore () {
      console.log('到底')
      this.loading = true
      this.current++

      if (this.datalist.length === this.total) {
        this.ishow = false
        return
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=510100&pageNum=${this.current}&pageSize=10&type=1&k=7600752`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"510100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 ul{
    li{
        overflow: hidden;
        padding: 10px;
        p{
          font-size: 14px;
          color: gray;
        }
     img{
         float: left;
         width:100px;
     }
    }
 }
</style>
