<template>
<nav>
    <ul>
        <!-- <li>
            <a href="/#/film">film</a>
        </li>
        <li>
            <a href="/#/center">center</a>
        </li>
        <li>
            <a href="/#/cinema">cinema</a>
        </li> -->
        <router-link to="/film" tag="li" active-class="myactive">
        <i class="iconfont icon-discount"></i>
        film</router-link>
        <router-link to="/cinema" tag="li" active-class="myactive">
        <i class="iconfont icon-electronics"></i>
        cinema</router-link>
        <router-link to="/center" tag="li" active-class="myactive">
        <i class="iconfont icon-service"></i>
        center</router-link>
    </ul>
</nav>
</template>

<style lang="scss" scoped>
   .myactive{
       color: red;
   }
   nav{
       position: fixed;
       bottom: 0px;
       left:0px;
       width:100%;
       height:50px;
       background: white;
   }
   ul{
       display: flex;
       li{
           flex: 1;
           line-height: 50px;
           text-align: center;
       }
   }

</style>
