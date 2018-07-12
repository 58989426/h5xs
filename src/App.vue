<template>
  <div id="app">
	    <Header />
	    <Swiper />
	    <Sea />
	    <Nav />
	    <Tiao />
	    <Current  type="本期强推"/>
	    <Tiao />
	    <Newbook  type="新书抢先"/>
	    <Tiao />
	    <Current  type="限时免费"/>
	    <Tiao />
	    <Current  type="编辑推荐"/>
	    <Tiao />
	    <Rank />
	    <Tiao />
	    <Classify />
	    <Tiao />
	    <Newbook  type="人气完本"/>
	    <Tiao />
	    <Quality />
	    <Tiao />
	    <Bottom />
  </div>
</template>

<script>
import Header from "./components/index/Header"
import Swiper from "./components/index/swiper"
import Sea from "./components/index/sea"
import Nav from "./components/index/nav"
import Tiao from "./components/common/tiao"
import Current from "./components/index/current"
import Rank from "./components/index/rank"
import Classify from "./components/index/classify"
import Quality from "./components/index/quality"
import Newbook from "./components/index/newbook"
import Bottom from "./components/common/bottom"
export default {
  name: 'App',
  components:{
    Header,Swiper,Sea,Nav,Tiao,Current,Rank,Classify,Newbook,Quality,Bottom
  },
  data(){
    return {
        list : []
    }
  }
}
</script>

<style>
	#app{
		overflow-y: scroll;
	}
</style>
