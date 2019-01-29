import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
 * 插件和全局对象的设置
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)//注册ElementUI插件
import axios from 'axios'
Vue.prototype.$axios = axios  //把axios设置为所有Vue组件实例的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false

/**
 * 创建全局过滤器
 *
 *
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
