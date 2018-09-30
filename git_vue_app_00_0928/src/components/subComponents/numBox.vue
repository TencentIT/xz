<template>
      <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
            <input class="mui-input-numbox" type="number" value="1" v-model="num"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
        </div>
</template>
<script>
export default{
    data(){
        return {
            num:0
        }
    },
    methods:{
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
    }
}
</script>
<style scoped>

</style>
