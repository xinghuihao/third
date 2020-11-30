<template>
    <div>
      <mt-index-list>
    <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
    <div @click="handleClick(city.cityId,city.name)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name">
          </mt-cell>
        </div>
  </mt-index-section>
</mt-index-list>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?k=8156407',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"510100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.datalist = this.handClick(res.data.data.cities)
    })
  },
  methods: {
    handClick (datalist) {
      // console.log(datalist)
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      console.log(letterArr)
      var newlist = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      return newlist
    },
    handleClick (id, name) {
      console.log(id)
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityName', encodeURIComponent(name))
      this.$router.push('/cinema')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
