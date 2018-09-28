<template>
   	 <div class="app_newslist">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for = "item in list" >
					<router-link :to="'/newsDetail/'+item.id">
						<img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>  {{item.title}}</h1> 
							<p class='mui-ellipsis'>
                                <span>{{item.ctime|dataFormat}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
		    </li>
        </ul>
        <mt-button type="primary" @click="getMore()" size="large">load more </mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){
          return{
            list:[],
            pageIndex:0
          }  
        },
        methods:{
            getNewList(){
                var url = "http://localhost:3000/newslist/list";
                this.$http.get(url).then(result=>{
                     console.log(result);
                    // if(result.body.ok ==1){
                        // console.log(result);
                        this.list = result.body.data;
                    // }else{
                    //     Toast("加载失败");
                    // }
                })
            },
            getMore(){
                // console.log(11);
                this.pageIndex++;
                var url = "newslist/list?pno="+this.pageIndex;
                this.$http.get(url).then(result=>{
                //    console.log(result);
                   this.list =  this.list.concat(result.body.data);
                })
            }
        },
        created(){
            this.getNewList();
        }
    }
</script>
<style>
.app_newslist .mui-table-view h1{
    font-size: 14px;
}
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display:flex;
    justify-content:space-between;
}
</style>
