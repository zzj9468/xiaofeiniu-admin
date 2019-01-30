<template>
    <el-container>
        <!--左边侧边栏-->
        <el-aside width='200px'>
            <aside></aside>
        </el-aside>
        <el-container>
            <!--顶部信息栏-->
            <el-header height='60px'>
                <header></header>
            </el-header>
            <!--主体部分-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import aside from './components/aside.vue'
import header from './components/header.vue'
export default{
    name:'Main',
    components:{
        aside,
        header
    }
}
</script>
<script>
   export default {
       data(){
           return {

           }
       },
       beforeCreate() {
        //组件创建前先检查是否已经登录为管理员
        if(!this.$store.state.adminName){
            this.$router.push('/login')
        } 
       },
       mounted() {
       }
       
    }
</script>
<style lang="">
    
</style>