<template>
    <div class="app_subcomment">
       <h3>
         发表评论
       </h3>
       <hr/>
       <textarea placeholder="请输入评论的内容(最多吐槽120文字)" maxlength="120"></textarea>
        <mt-button size="large" type="primary">发表评论
        </mt-button><br>
       <div class="cmt-list">
          <div class="cmt-list-item">
            <div class="cmt-title">第一楼:&nbsp;&nbsp; 用户:文华 发表时间:2000-10-10</div>
          </div>
       
          <div class="cmt-body">
            人生苦短，我学node
          </div>
       </div>
       <mt-button size="large" type="danger">加载更多
       </mt-button><br>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            // id:
            list:[]
            }
        },
        methods:{
            getCommentList(){
                this.$http.get("newslist/commentlist?nid="+this.id).then(result=>{
                        console.log(62,result);
                        // if(err) throw err;
                        this.list = result;
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
