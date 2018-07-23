<template>
	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		    </div>
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
		     autoplay: true,
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