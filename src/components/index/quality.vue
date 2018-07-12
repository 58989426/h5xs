<template>
	<div class="quality">
		<div class="top">
			<div class="title">
				精品书单推荐
			</div>
			<router-link to="/">
				<div class="more">
					<span>更多</span>
					<i class="iconfont icon-right"></i>
				</div>
			</router-link>
		</div>
		<ul class="container">
			<router-link to="/">
				<li class="box">
					<ul class="t">
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
					</ul>
					<div class="zz">
						<span>听说你脑洞清奇，文笔风骚</span>
					</div>
					<p class="text">穿越银河系，黑客撩御医，高冷遇萌货~各种奇思巧搭
					，让人脑洞大开。扒一扒那些文风奇特，脑洞清奇的奇葩文。
					</p>
					<div class="jauthor">
						<img src="@/assets/images/tx.jpg" alt="" />
						<span>银河系</span>
					</div>
					<div class="collect">
						+收藏书单(39)
					</div>
				</li>
			</router-link>
			
			
			<router-link to="/">
				<li class="box">
					<ul class="t">
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
					</ul>
					<div class="zz">
						<span>听说你脑洞清奇，文笔风骚</span>
					</div>
					<p class="text">穿越银河系，黑客撩御医，高冷遇萌货~各种奇思巧搭
					，让人脑洞大开。扒一扒那些文风奇特，脑洞清奇的奇葩文。
					</p>
					<div class="jauthor">
						<img src="@/assets/images/tx.jpg" alt="" />
						<span>银河系</span>
					</div>
					<div class="collect">
						+收藏书单(39)
					</div>
				</li>
			</router-link>
			
			
			<router-link to="/">
				<li class="box">
					<ul class="t">
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
						<li><img src="@/assets/images/test.jpg"  /></li>
					</ul>
					<div class="zz">
						<span>听说你脑洞清奇，文笔风骚</span>
					</div>
					<p class="text">穿越银河系，黑客撩御医，高冷遇萌货~各种奇思巧搭
					，让人脑洞大开。扒一扒那些文风奇特，脑洞清奇的奇葩文。
					</p>
					<div class="jauthor">
						<img src="@/assets/images/tx.jpg" alt="" />
						<span>银河系</span>
					</div>
					<div class="collect">
						+收藏书单(39)
					</div>
				</li>
			</router-link>
		</ul>
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
		.quality{
			height: rf(600px);
	    	width: 100%;
	    	overflow: hidden;
	    	padding-left: 0.5rem;
	    	border: 1px solid palegreen;
	    	.top{
    		height: 1.5rem;
    		width: 100%;
    		padding-right: 0.5rem;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		
    		.title{
    			height: 0.5rem;
    			font-size: 0.5rem;
    			line-height: 0.5rem;
    			width: 4rem;
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
        	.container{
        		height: rf(520px);
        		width: 50rem;
        		padding: 0.3rem 0;
        		
        		.box{
        			height: rf(490px);
        			width: rf(480px);
        			margin-right: 0.4rem;
        			margin-left: 0.2rem;
				    border-radius: .3125rem;
				    box-shadow: 0 1px 3px rgba(0,0,0,.3);
				    position:relative;
				    float:left;
				    .t{
				    	height: rf(176px);
				    	width: 100%;
				    	display: flex;
				    	justify-content: center;
				    	background: rgba(0,0,0,0.8);
				    	li{
				    		width: rf(120px);
				    		height: rf(176px);
				    		
				    		img{
				    		width: rf(120px);
				    		height: rf(176px);	
				    		}
				    	}
				    }
				    .zz{
				    	height: rf(176px);
				    	width: 100%;
				    	display: flex;
				    	justify-content: center;
				    	font-size: rf(34px);
				    	position: absolute;
					    top: 0;
					    left: 0;
					    z-index: 3;
					    color: #fff;
					    background: rgba(0,0,0,.4);
					    border-top-left-radius: .3125rem;
					    border-top-right-radius: .3125rem;
				    	line-height: 5.5rem;
				    }
				    .text{
				    	 margin-top: .5rem;
					    line-height: rf(40px);
					    padding: 0 .4rem;
					    height: rf(120px);
					    overflow: hidden;
					    color: #1a1a1a;
					    font-size: rf(28px);
					    color: #1a1a1a;
				    }
				    .jauthor{
			    	    margin-top: .4rem;
					    padding: 0 .5rem;
					    font-size: rf(28px);
					    display: block;
					    overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					    color: grey;
					    height: 0.8rem;
					    img{
					    	display: inline-block;
						    width: 0.8rem;
						    height: 0.8rem;
						    margin-right: .5rem;
						    border-radius: 50%;
						    box-shadow: 0 0 1px rgba(0,0,0,.1);
						    float: left;
					    }
					    span{
					    	display: inline-block;
    						float: left;
    						height: 0.8rem;
    						line-height: 0.8rem;
					    }
				    }
				    .collect{
			    	    font-size: rf(30px);
					    line-height: 1.2rem;
					    display: block;
					    width: 8rem;
					    height: 1.2rem;
					    margin: .4rem auto;
					    text-align: center;
					    color: #fff;
					    border-radius: .9375rem;
					    background: #ff3955;
				    }
        		}
        	}
		}
</style>