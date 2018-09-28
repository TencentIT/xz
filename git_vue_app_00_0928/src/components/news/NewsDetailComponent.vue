<template>
    <div class="app_newdetail">
        <h1 class="title">{{newsinfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.ctime | dataFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <div class="container">
          
            <div class="news_content">
                <img src="../../img/yuantiao.jpg" alt="">
                <p>
                     {{newsinfo.content}}
                </p>
            </div>
        </div>
        <!-- 评论区域  这里的id 是指父组件的id data（）{} 里面的id-->
        <comment-box :id="this.id">   
            评论区域
        </comment-box>
    </div>
</template>
<script>
import comment from "../subComponents/comment.vue"
    export default{
        data(){
            return{
                id:this.$route.params.id,
                newsinfo:{}
            };
        },
        methods:{
            getNewsDetail(){
                var id = this.$route.params.id;
                var url = "newslist/find?id="+this.id;
                this.$http.get(url).then(result=>{
                    console.log(222,result);
                    this.newsinfo = result.body.msg[0];
                    // console.log(2333,result.body.msg[0].content);
                })
            }
        },
        created(){
            // console.log(333,this.$route.params.id);
            this.getNewsDetail();
             console.log(this.id);      //在程序中直接使用this.id
        },
        components:{        //引入评论子组件        
            "comment-box":comment  //注册子组件 "component-box" 这个名字自己随便起       
        }
    }    
</script>
<style scoped>
    .app_newdetail{
        padding:0 4px;
    }
    .title{
        text-align:center;
        font-size: 24px;
    }
    .subtitle{
        display:flex;
        justify-content:space-between;
    }
    .container{
       
        text-align:center;
    }
    .news_content img{
        width:100%;
    }
    .news_content p{
        border:1px solid red; 
       
    }
</style>
