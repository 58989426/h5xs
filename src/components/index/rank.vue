<template>
	<div class="rank">
		<div class="top">
			<div class="title">
				排行榜
			</div>
			<router-link to="/">
				<div class="more">
					<span>更多</span>
					<i class="iconfont icon-right"></i>
				</div>
			</router-link>
		</div>
		<ul class="tab" >
			<li v-for="(item,index) in rtab" :class="{cur:cur===index}" @click="change(index)">{{item}}</li>
		</ul>
		<Slide />
	</div>
</template>

<script>
import Slide from "@/components/common/slide.vue"
export default{
 
//	name:"box",
	components:{
    	Slide
	},
	data(){
		return{
			rtab:["热销榜","点击榜","新书榜","完本榜"],
			cur:0
		}
	},
	methods:{
		change(index){
			this.cur = index;
		}
	}
}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem; 
        }
    .rank{
    	height: rf(520px);
    	width: 100%;
    	overflow: hidden;
    	    .top{
    		padding: 0 0.5rem;
    		height: 1.5rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		
    		.title{
    			height: 0.5rem;
    			font-size: 0.5rem;
    			line-height: 0.5rem;
    			width: 2.6rem;
    			text-align: center;
    			border-left: rf(2px) solid paleturquoise;
    			font-weight: 700;
    		}
    		.more{
    			font-size: 0.5rem;
    			i{
    				font-size: 0.6rem;
    			}
    		 }
        	}
        .tab{
        	height: rf(80px);
        	padding: 0 0.5rem;
        	display: flex;
        	align-items: center;
        	li{
        		display: flex;
        		height: rf(60px);
        		width: rf(175px);
        		border: 1px solid #ff3955;
        		font-size: 0.6rem;
        		justify-content: center;
        		align-items: center;
        		color: #FF3955;
        	}
        	.cur{
        		background: #FF3955;
        		color: white;
        	}
        }	
    }    
</style>