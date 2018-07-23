<template>
	<div>
        <div class="dheader">
            <div class="left">
                <router-link to="/"><i class="iconfont icon-left "></i></router-link>
                <span> 待你深情相许</span>
            </div>
            <div class="right">
                 <router-link to="/"><i class="iconfont icon-sousuo "></i></router-link>
                  <router-link to="/"><i class="iconfont icon-mulu "></i></router-link>
            </div>
        </div>
		<!--书图片-->
        <div class="detail-info">
                   <img src="@/assets/images/test.jpg" >
                   <div class="cell">
                       <h6>带你深情相许</h6>
                       <p>灵气值</p>
                       <p>现代言情/豪门世家</p>
                       <p>24.24万字<span>|</span>连载 </p>
                   </div>

        </div>
		<!--tab-->
		<div class="tab" >
			<router-link to="/"  :class="{'cur':curIndex===index}" v-for="(item,index) in title" :key="index" >
				{{item}}
			</router-link>
			
		</div>
		<!--简介-->
		<div class="intro" style="display: none;">
			十四年情深似海，痴心交付，换来的是他江山稳固，她家破人亡。
			当她踏着鲜血步步重生，回归血债的开端……
			“狠毒？你可知亲眼看着双亲被野狗分食，是何等痛不欲生？”
			在这个世家与皇族共天下的浮华乱世，她是华陵凤家最尊贵的嫡女。
			一手折扇，半面浅笑，藏住满腹阴谋。
			一袭红裳，七弦着墨，结交天下名流。
			当她智斗族男，颠覆祖制，成为有史以来唯一一位女少主；
			当她跻身清流，被名士推崇，成为一代领袖；
			当她——将傲娇的狼骑战神养成人人垂涎的绝色男宠。
			凤举：“灼郎，我心悦你，你呢？”
			慕容灼：“她足下的尺寸之地，便是本王要守护的江山！”
			巍巍帝阙，谁将兴举盛世风骨？
			（读者群：232886807）
			<i class="iconfont icon-down"></i>
		</div>
		<div class="into">
			十四年情深似海，痴心交付，换来的是他江山稳固，她家破人亡。
			当她踏着鲜血步步重生，回归血债的开端……
			“狠毒？你可知亲眼看着双亲被野狗分食，是何等痛不欲生？”
			在这个世家与皇族共天下的浮华乱世，她是华陵凤家最尊贵的嫡女。
			一手折扇，半面浅笑，藏住满腹阴谋。
			一袭红裳，七弦着墨，结交天下名流。
			当她智斗族男，颠覆祖制，成为有史以来唯一一位女少主；
			当她跻身清流，被名士推崇，成为一代领袖；
			当她——将傲娇的狼骑战神养成人人垂涎的绝色男宠。
			凤举：“灼郎，我心悦你，你呢？”
			慕容灼：“她足下的尺寸之地，便是本王要守护的江山！”
			巍巍帝阙，谁将兴举盛世风骨？
			（读者群：232886807）
			
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				title:["免费试读","VIP订阅","加书架","加书单"], 
				curIndex:0
			}
		},
		methods:{

			}
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem;
        }
        a{
        	text-decoration: none;
        	
        }
    div{
        .dheader{
            padding:0 0.5rem;
            box-sizing:border-box;
            font-size:0.7rem;
            height:2rem;
            display: flex;
            align-items:center;
            justify-content:space-between;
            .left{
                display: flex;
                justify-content:space-between;
                a{
                    text-decoration:none;
                    color:#ff3955;
                    display: block;
                    width:0.8rem;
                    height:0.8rem;
                    margin-right:0.4rem;
                    i{
                        font-size:0.8rem;

                    }
                }
            }
            .right{
                height:1rem;
                width:2.5rem;
                display: flex;
                justify-content:space-between;
                a{
                    color:#ff3955;
                    display: flex;
                    width:1rem;
                    height:1rem;
                    justify-content: center;
                    align-items: center;
                    i{
                    	font-size:0.6rem
                    }
                }
            }
        }
        .detail-info{
            height:6rem;
            width:100%;
            padding:  0.5rem;
            box-sizing:border-box;
            display: flex;

            img{
                height:4.6rem;
                width:3.5rem;
                margin-right:0.5rem;
            }
            .cell{
                font-size:0.4rem;
                width:10rem;
                height:4.6rem;
                box-sizing:border-box;
                padding-top:0.5rem;
                h6{
                    height:1rem;
                    font-size:0.65rem;
                    line-height:1rem;
                }
                p{
                    display: block;
                    height:0.85rem;
                    line-height:0.85rem;
                }
            }
        }
        .tab{
        	height: 2rem;
        	width: 100%;
          	padding: 0 0.5rem;
        	box-sizing: border-box;
        	font-size: 0.6rem;
        	display: flex;
        	justify-content: space-between;
        	/*align-items: center;*/
        	border-bottom: rf(1px) solid #CCCCCC;
        	a{
        		color: black;
        		height: 1.2rem;
        		width: 22%;
        		border: rf(1px) solid #CCCCCC;
        		display: flex;
        		justify-content: center;
        		align-items: center;
        		border-radius: 0.2rem;
        	}
        	.cur{
        		background: #ff3955;
        		color: white;
        		border: none;
        	}
        }
        .intro{
        	padding:0.5rem 0.5rem 0 0.5rem;
        	height: 4.5rem;
        	overflow: hidden;
        	font-size: 0.6rem;
        	line-height: 1rem;
        	position: relative;
        	i{
        		position: absolute;
        		bottom: 0rem;
        		right: 0.5rem;
        		height: 1rem;
        		width: 1rem;
        		font-size: 1rem;
        		background: white;	
        	}
        }
        .into{
        	padding:0.5rem 0.5rem 0 0.5rem;
        	height: auto;
        	overflow: hidden;
        	font-size: 0.6rem;
        	line-height: 1rem;
        }
    }

</style>