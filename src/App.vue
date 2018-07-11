<template>
  <div id="app">
	    <Header />
	    <Swiper />
	    <Sea />
	    <Nav />
	    <Tiao />
	    <Current />
	    <Tiao />
	    <Newbook />
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
import Newbook from "./components/index/newbook"
import Bottom from "./components/common/bottom"
export default {
  name: 'App',
  components:{
    Header,Swiper,Sea,Nav,Tiao,Current,Newbook,Bottom
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
