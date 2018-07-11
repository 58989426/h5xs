<template>
	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <router-link to="/"><div class="swiper-slide"><img src="@/assets/images/spic1.gif"/></div></router-link>
		        
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		    </div>
		    <!-- 如果需要分页器 -->
		1    <div class="swiper-pagination"></div>
		     <!-- 如果需要滚动条 -->
		     <div class="swiper-scrollbar"></div>
		    
	</div>
</template>

<script>
	import Swiper from 'swiper';
		export default {
		  data () {
		    return {
		    	
		    }
		  },
		  mounted(){
		     new Swiper ('.swiper-container', {
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要滚动条
		    scrollbar: '.swiper-scrollbar',
		  })        
		  }
		}	
</script>

<style scoped="" lang="scss">
		 @function rf($px){//$px为需要转换的字号
            @return $px / 50px * 1rem; //25px为根字体大小
        }
	.swiper-container {
        width: rf(700px);
        height: rf(270px);
        .swiper-wrapper{
        	
        	.swiper-slide{
        		width: rf(700px);
        		height: rf(270px);
        		img{
        			width: rf(700px);
        	height: rf(270px);
        		}
        	}
        }
    }
</style>