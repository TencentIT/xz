import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

//1.
import {Header,Swipe,SwipeItem,Button} from "mint-ui";

//2
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//3 引入vue-resource  请求ajax用
import VueResource from "vue-resource"
//4VueResource  里面所有的都用 所以用  加载  上面mint-ui是需要哪个用哪个  所以是{}按需引入
Vue.use(VueResource)


//5 定义全局(日期格式) 过滤器 自定义 dateFormat 过滤器名称 datestr 用户日期
Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD"){
  return new Date(datastr).toLocaleString();
});

//6 设置全局ajax访问基础路径
Vue.http.options.root = "http://127.0.0.1:3000/"






new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
