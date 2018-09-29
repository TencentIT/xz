<template>
    <div class="app_subcomment">
        <h1>评论子组件</h1>
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

</style>
