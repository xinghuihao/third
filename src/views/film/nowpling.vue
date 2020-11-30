<template>
    <div>
    <ul>
        <li v-for='data in $store.state.comingList' :key='data.filmId' @click="handlechange(data.isPresale,data.filmId)">
            <img :src="data.poster">
            <h3>{{data.name}}</h3>
             <br/>  <br/>
            <p>主演：{{data.actors | actorfilter }}</p>
        </li>
    </ul>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('listenaction')
    } else {
      console.log('数据')
    }
  },
  methods: {
    handlechange (data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '该影片没有排期?',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            console.log('回到首页')
            this.$router.push('./flim/comingsoon')
          }
        })
      }
      this.$router.push({ name: 'detail', params: { id: id } })
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
