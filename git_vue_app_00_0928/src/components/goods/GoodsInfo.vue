<template>
    <div class="app_goodsinfo">
        <h1>GoodsInfo.vue 页面</h1>
      
     <!-- 第一部分 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <v-swiper :list="imagelist"></v-swiper>
                </div>
            </div>  
		</div>
        <!-- 第二部分 购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						市场价<del>￥{{info.p_old}}</del>  
                        销售价<del><span>￥{{info.p_now}}</span></del>
					</div>
				</div>
				<div class="mui-card-footer">添加至购物车，立即购买</div>
        </div>
        <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
            <input class="mui-input-numbox" type="number" value="1" v-model="num"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
        </div>
    </div>
</template>
<script>
import swiper from "../subComponents/swiper.vue"
// import mui from "../../lib/mui/js/mui.js"  由于vue脚手架自动启动了严格模式 与mui.js冲突 
//解决方案1 下载扩展插件 禁用vue脚手架的严格模式 解决父方案2  不用mui.js自己写
    export default{
       
        data(){
            return {
                imagelist:[],
                info:[],
                num:0
            };
        },
        methods:{
            getImageList(){
                var url = "goodslist/list"
                this.$http.get(url).then(result=>{
                    if(result.body.code ==1 ){
                        this.imagelist = result.body.msg; 
                        console.log(1,this.imagelist);
                    }
                })
            },
            findDetail(){
                this.$http.get("goodslist/find").then(result=>{
                    console.log(2,result)
                    this.info = result.body;
                })
            },
            goSub(){
                this.num--;

                if(this.num<0){
                    this.num=0
                }
            },
            goAdd(){
                if(this.num>=99){return;}
                this.num++;
            }
            
        },
        components:{
            "v-swiper":swiper
        },
        created(){
            this.getImageList();
            this.findDetail();
        }
        
    }
</script>
<style scoped>
.lbt{
     height:200px;
  }
  .lbt img{
    height:200px; 
    width:100%;
   
  }
</style>
