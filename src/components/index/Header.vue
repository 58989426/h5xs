    <template>	
    	<!--头部-->
        <div class="header">
            <div class="left">
                <img src="@/assets/images/logo.gif"  class="logo">
                <span class="title">小说阅读网</span>
            </div>
            <div class="right">
	            <router-link to="/"><i class="iconfont icon-ren"></i></router-link>
				<router-link to="/"><i class="iconfont icon-xiaoshuowanben"></i></router-link>
            </div>
        </div>
        <!--轮播图-->
        
    </template>

    <script>
     import Swiper from 'swiper';
		export default {
		  data () {
		    return {
		      
		    }
		  },
		  mounted(){
		    
		  }
		}	
    </script>
    <style lang="scss">
        @function rf($px){//$px为需要转换的字号
            @return $px / 50px * 1rem; //25px为根字体大小
        }
   
    
    .header{
            padding:0 rf(25px);
            height: rf(88px);
			
            .left{
                width: rf(180px);
                height: rf(88px);
                font-size: rf(20px);
                float: left;
                line-height: rf(88px);

                img{
                    display: block;
                    height: rf(40px);
                    width: rf(45px);
                    margin-top: rf(24px);
                    float: left;
                    padding-left: rf(5px);
                }
                span{
                    float: right;
                    display: block;
                    height: rf(88px);
                    width: rf(130px);
                    line-height: rf(88px);
                    text-align: center;
                }
                }
            .right{
                float: right;
               width:rf(100px);
               height: rf(88px);
               padding-top: rf(21px);
               display: flex;
               justify-content: space-between;
               a{
               	display: block;
               	height: rf(46px);
               	 i{
                 display: block;
                 width: rf(46px);
                 height: rf(46px);
                 color: #ff7e8f;
                 font-size: rf(46px);
                 box-sizing: border-box;
               	}
               }
            }
            }

    </style>