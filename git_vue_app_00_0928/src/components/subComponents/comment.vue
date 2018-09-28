<template>
    <div class="app_subcomment">
        <h1></h1>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods:{

        },
        created(){
            console.log("评论子组件");
        },
        props:["id"]        //接受父组件传递的参数

    }
</script>
<style scoped>

</style>
