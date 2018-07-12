<template>
	<div class="popular">
		<div class="top">
			<div class="title">
				人气完本
			</div>
			<router-link to="/">
				<div class="more">
					<span>更多</span>
					<i class="iconfont icon-right"></i>
				</div>
			</router-link>
		</div>
		<div class="content">
			<div class="box" >
		        <img class='pimg' src='@/assets/images/test.jpg' />
		        <div class='right'>
		          <div class='name'>  山里人家</div>
		          <div class='intro'>
		            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
		          </div>
		          <div class='author'>
			          <div class="left">
			          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
			          </div>
		              <div class="right2">
		              	<div>玄幻言情</div>
		              	<div>连载中</div>
		              	<div>88.88万</div>
		              </div>
		          </div>
		        </div>
		      </div>
		     
		    <div class="box" >
		        <img class='pimg' src='@/assets/images/test.jpg' />
		        <div class='right'>
		          <div class='name'>  山里人家</div>
		          <div class='intro'>
		            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
		          </div>
		          <div class='author'>
			          <div class="left">
			          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
			          </div>
		              <div class="right2">
		              	<div>玄幻言情</div>
		              	<div>连载中</div>
		              	<div>88.88万</div>
		              </div>
		          </div>
		        </div>
		      </div>
		    <div class="box" >
		        <img class='pimg' src='@/assets/images/test.jpg' />
		        <div class='right'>
		          <div class='name'>  山里人家</div>
		          <div class='intro'>
		            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
		          </div>
		          <div class='author'>
			          <div class="left">
			          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
			          </div>
		              <div class="right2">
		              	<div>玄幻言情</div>
		              	<div>连载中</div>
		              	<div>88.88万</div>
		              </div>
		          </div>
		        </div>
		      </div>
		</div>
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
    .popular{
    	height: rf(795px);
    	width: 100%;
    	overflow: hidden;
    	padding: 0 0.5rem;
    	
        .top{
    		
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
        .content{
        	.box{
			  height: rf(240px);
			  border-bottom: rf(2px) solid #f2f2f2;
			  display: flex;
			  justify-content: space-between;
			  position: relative;
			  display: flex;
    	justify-content: space-between;
			}
			.box .pimg{
			  margin-top: rf(15px);
			  width: rf(160px);
			  height: rf(210px); 
			  overflow: hidden;
			}
			
			.box .right{
			  width: rf(510px);
			  height: rf(240px);
			  display: flex;
			  flex-direction: column;
			 .name{
			  font-size: rf(32px);
			  height: rf(70px);
			  line-height: rf(75px);
			  font-weight: 700;
			}
			.author{
			  font-size: rf(30px);
			  color: #999;
			  height: rf(70px);
			  line-height: rf(40px);
			  display: flex;
			  justify-content: space-between;
			  .left{
			  	i{
			  		font-size: 0.6rem;
			  	}
			  }
			  .right2{
			  height: rf(70px);
			  font-size: rf(20px);
			  display: flex;
			  justify-content: space-between;
			  width: 6rem;
			  padding-top:0.2rem;
			  div{
			  border-radius: 0.1rem;
			  height: rf(30px);
			  text-align: center;
			  line-height: rf(20px);
			  padding: 0.05rem;
			  }
			  div:nth-child(1){
			  	color: #ffad33;
	  
			  	border:  1px solid #ffad33;
			  }
			  div:nth-child(2){
			    color: #ff4861;
			   	margin: 0 0.1rem;
			   	border:  1px solid #FF4861;
			  }
			  div:nth-child(3){
			    color: #5993f0;
			   	border:  1px solid #5993f0;
			  }
			  }
			}
			.intro{
			  text-indent: 0;
			  font-size: rf(30px);
			  height: rf(100px);
			  overflow: hidden;
			  white-space: wrap; 
			  text-overflow: ellipsis;
			  color: #999;
			  line-height: rf(50px);
			}
			}
        }	
    }    
</style>