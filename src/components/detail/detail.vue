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

        <div class="detail-info">
                   <img src="@/assets/images/test.jpg" >
                   <div class="cell">
                       <h6>带你深情相许</h6>
                       <p>灵气值</p>
                       <p>现代言情/豪门世家</p>
                       <p>24.24万字<span>|</span>连载 </p>
                   </div>

        </div>


	</div>

</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem;
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
                    text-decoration:none;
                    color:#ff3955;
                    display: block;
                    width:1rem;
                    height:1rem;
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
    }

</style>