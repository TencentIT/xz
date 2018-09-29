<template>
    <div class="app_subcomment">
       <h3>
         发表评论
       </h3>
       <hr/>
       <textarea placeholder="请输入评论的内容(最多吐槽120文字)" maxlength="120" v-model="content"></textarea>
        <mt-button size="large" type="primary" @click="postComment()">发表评论
        </mt-button><br>    
       <div class="cmt-list"  v-for="(item,i) in list"  :key="item.id">
          <div class="cmt-list-item" >
            <div class="cmt-title">第{{i+1}}楼:&nbsp;&nbsp; 用户:{{item.username}} 发表时间:{{item.ctime|dataFormat}}</div>
          </div>
       
          <div class="cmt-body">
              <!-- 12132123132 -->
              {{item.comment}}
          </div>
       </div>
       <mt-button size="large" type="danger" @click="getCommentList()">加载更多
       </mt-button><br> 
    </div>
</template>
<script>
import {Toast} from "mint-ui";
    export default{
        data(){
            return {
            // id:
            list:[],
            content:"" ,  //双向绑定的留言
            pageIndex:0
            }
        },
        methods:{
            getCommentList(){
                //分页  
                this.pageIndex++;
                var url = "newslist/commentlist?nid="+this.id;
                url+="&pno="+this.pageIndex;
                this.$http.get(url).then(result=>{
                        console.log(62,result);
                        // if(err) throw err;
                        this.list =this.list.concat(result.body.data);

                })
            },
            postComment(){
                //发表评论
                var username = "匿名用户",  
                    nid = this.id;

                    var content = this.content; //双向绑定的留言内容
                    // console.log(username+":"+nid+":"+content);
                    var url = "newslist/saveComment";
                    var obj = {nid:nid,content:content,username:username};
                    // console.log(content,nid,username);
                    if(content.length<2){
                        Toast("亲，评论内容太少")
                        return;
                    }
                this.$http.post(url,obj).then(result=>{
                    console.log(result);
                    
                    if(result.body.code==1 ){
                        Toast(result.body.msg   )
                        this.content = "";
                        this.pageIndex=0;   //将当前页码清空
                        this.list = [];     //数据值清空
                        this.getCommentList();  //加载第一页
                    }
                })
            } 
        },
        created(){
            this.getCommentList();  
            // console.log("评论子组件");
        },
        props:["id"]        //子组件里面通过 props["id"]  来接受父组件传递的参数 

    }
</script>
<style scoped>
.app_subcomment h3{
        font-size:18px;
    }
    .app_subcomment textarea{
        font-size:14px;
        height:90px;
        margin:0;
    }
    .app_subcomment .cmt-list{
        margin:5px 0;
    }
    .app_subcomment .cmt-list .cmt-list-item{
        font-size:13px;


    }
    .app_subcomment .cmt-list .cmt-list-item .cmt-title{
        line-height:30px;
        background-color:#ddd;
        text-indent:2em;
    }
</style>
