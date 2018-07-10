    <template>
        <div class="header">
            <div class="left">
                <img src="../assets/images/logo.gif"  class="logo">
                <span class="title">小说阅读网</span>
            </div>
            <div class="right">
                <i></i>
                <i></i>
            </div>
        </div>
    </template>

    <script>
        export default{

        }
    </script>
    <style lang="scss">
        @function rf($px){//$px为需要转换的字号
            @return $px / 50px * 1rem; //25px为根字体大小
        }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
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
            }
            }

    </style>