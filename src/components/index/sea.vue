<template>
	<router-link to="/"><div class="sea">倾城娇女</div></router-link>
	
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@function rf($px){//$px为需要转换的字号
            @return $px / 50px * 1rem; //25px为根字体大小
        }
        a{
        		display: block;
        		text-decoration: none;
        		color: #CCCCCC;
        	}
        .sea{
        	height:rf(66px);
        	width:rf(700px);
        	margin: rf(10px) rf(25px) 0 rf(25px);
        	background: #CCCCCC;
        	line-height: rf(66px);
        	font-size: rf(20px);
        	text-align: center;
        	background: url(../../assets/images/sea.gif) no-repeat  ;
        	background-position: rf(260px) center;
        	background-size: rf(36px);
        	padding: 0 rf(25px);
        	border-radius: rf(33px);
        }
</style>