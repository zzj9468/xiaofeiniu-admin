<template>
    <div class='xfn-main-header'>
        <h3 class='xfn-title'>{{this.$store.state.globalSettings.appname}}管理后台</h3>
        <div class='xfn-right'>当前用户：{{this.$store.state.adminName}}  
        <el-button type="primary" plain size='mini' @click='quit'>退出</el-button>
        </div>
    </div>
</template>
<script>
   export default {
       methods:{
           quit(){
               //清除当前用的登录信息
               this.$store.commit('adminName','');
               //跳转回登录页
               this.$router.push('/login')
           }
       }
    }
</script>
<style lang="scss">
$header-height:60px;
    .xfn-main-header{
        background:#f3f3f3;
        border-radius:4px;
        height:$header-height;            
        line-height:$header-height;
        color:#909399;
        padding:0 6px;
        .xfn-title{
            float:left;
            display:inline-block;
            margin:0;
            font-weight:500;

        }
        .xfn-right{
            float:right;
        }
    }

</style>