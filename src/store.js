import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
  //多组件共用的数据

export default new Vuex.Store({
  //公共数据的读取方法:this.$store.state.adminName
  //公共数据的读取方法:this.$store.state.globalSettings
  state: {   //当前数据的状态,类似vue组件对象的data属性
    adminName:'',   //当前登录的管理员名
    globalSettings:{   //项目的全局设置信息
      apiUrl:'http://127.0.0.1:8090' //初始的默认值
    }
  },
  //公共数据的修改方法:this.store.commit('setAdmin','boss')
  mutations: { 
    //进化,类似于vue对象的methods属性--用mutations修改数据可以保证数据的'响应式',控制数据的进化,即修改数据,操作是异步的
    setAdmin(state,value){
      state.adminName=value;
    },
    setGlobalsettings(state,value){
      state.globalSettings=value;
    }
  },
  actions: { //同步mutations

  }

})
