import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
/**
 * 插件和全局对象的设置
 */
Vue.use(ElementUI)//注册ElementUI插件
Vue.prototype.$axios = axios  //把axios设置为所有Vue组件实例的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false

/**
 * 创建全局过滤器
 */
Vue.filter('date', (val) => {
    //把BIGINT转换为yyyy-mm--dd
    var data = new Date(val)
    var yy = data.getFullYear();
    var mm = data.getMonth() + 1;
    mm =mm < 10 ? '0' + mm : mm;
    var dd = data.getDate();
    dd=dd < 10 ? '0' + dd : dd;
    return yy + '-' + mm + '-' + dd
})
Vue.filter('datetime', (val) => {
    //把BIGINT转换为yyyy-mm-dd hh:mm:ss
    var data = new Date(val)
    var yy = data.getFullYear();
    var mm = data.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : mm;
    var dd = data.getDate();
    dd=dd < 10 ? '0' + dd : dd;
    var hh = data.getHours();
    hh=hh < 10 ? '0' + hh : hh;
    var mi = data.getMinutes();
    mi=mi < 10 ? '0' + mi : mi;
    var ss = data.getSeconds();
    ss=ss < 10 ? '0' + ss : ss;
    return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss
})
Vue.filter('currency', (val) => {
  //把int转换为￥xx.xx
  return '￥' + val.toFixed(2)
})
Vue.filter('tableStatus',(val)=>{
  if(val==1)  return '空闲';
  else if(val==2) return '预定';
  else if(val==3) return '占用';
  else return '其他';
})
new Vue({
  router,
  store,//根据当前项目唯一的Vuex存储仓库对象,其中保存着各个组件共享的数据
  render: h => h(App) //根据APP组件创建<App</App>元素
  /**
   * Vuex底层的原理就是sessionstorage,但是sessionstorage不具备响应式数据(一个页面的数据发生变化,其它页面不会改变)的功能
   * render:渲染,在根组件APP中渲染元素
   * ES6的写法
   * (createElement)=>{
   *    return createElement(App);
   * }
   */
}).$mount('#app')
