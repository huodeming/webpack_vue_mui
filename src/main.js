
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//把路由注册到Vue中.

 
//导入mint-ui
//import Mint from 'mint-ui';
//Vue.use(Mint);
//引入样式库.
import 'mint-ui/lib/style.css';
//想使用bootstrap3中的图标,所以需引入bootstrap的css
import 'bootstrap/dist/css/bootstrap.css';

import {Button} from 'mint-ui';
Vue.component(Button.name, Button);
//Vue.component(Toast.name, Toast);

import App from './App.vue';


var vm = new Vue({
    el:'#app',
    //component:{ App },
    render: c => c(App),//会把App中内容覆盖到index.html中的#app标签,所以router-link与router-view要写在App.vue文件中. 
    //router  //将路由对象挂载到 vm 实例上
});


