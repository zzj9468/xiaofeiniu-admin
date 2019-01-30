<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default{
      mounted() {
      //当前组件挂载完成后，需要异步获取整个网站的全局设置
        var url=`${this.$store.state.globalSettings.apiUrl}/admin/setting`;
        this.$axios.get(url)
            .then((res)=>{
                this.$store.commit('setGlobalsettings',res.data.data[0]);
            })
            .catch((err)=>{
                console.error(err)
            })
      }
  }
</script>
<style lang="scss">
    #app{
      color:#303133;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

</style>
