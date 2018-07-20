<template>
	<div class="nav">
		<router-link to="/detail">
			<div class="fl">
				<i class="iconfont icon-leimupinleifenleileibie"></i>
				<span>分类</span>
			</div>
		</router-link>
		<router-link to="/detail">
			<div class="fl">
				<i class="iconfont icon-paihang"></i>
				<span>排行榜</span>
			</div>
		</router-link>
		<router-link to="/detail">
			<div class="fl">
				<i class="iconfont icon-fuli"></i>
				<span>福利</span>
			</div>
		</router-link>
		<router-link to="/detail">
			<div class="fl">
				<i class="iconfont icon-xinshu"></i>
				<span>新书</span>
			</div>
		</router-link>
		<router-link to="/detail">
			<div class="fl">
				<i class="iconfont icon-shu"></i>
				<span>完本</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem; 
        }
        .nav{
        	display: flex;
		    width: 100%;
		    height: 2rem;
		    justify-content: space-between;
		    -webkit-box-pack: justify;
		    background-color: #fff;
		    padding: 0 1rem;
		    a{
		    	display: block;
		        width: 1.5rem;
			    height: 2rem;
			    text-align: center;
			    font-size: .75rem;
			    position: relative;
			    line-height: 1.5;
			    .fl{
			    	i{
			    		display: inline-block;
					    width: 1.5rem;
					    height: rf(60px);
					    text-align: center;
					    font-size: .75rem;
					    position: relative;
					    color: #ff3f5a;
			    	}
			    	span{
			    		position: absolute;
					    left: 0;
					    right: 0;
					    bottom: .1875rem;
					    font-weight: 400;
					    font-size: rf(20px);
					    color: black;
			    	}
			    }
		    }
        }
</style>