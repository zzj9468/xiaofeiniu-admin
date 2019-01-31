<template>
    <el-container>
        <!--左边侧边栏-->
        <el-aside width='200px'>
        <el-menu :unique-opened='true' :router='true' :default-openeds="defaultOpeneds" default-active='defaultActive'>
            <el-menu-item index='/settings'>
                <i class='el-icon-setting'></i>
                <span slot='title'>全局设置</span>
            </el-menu-item>
            <el-submenu index='table'>
                <template slot='title'>
                    <i class='el-icon-menu'></i>
                    <span>桌台管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index='/table/list'>
                        <span>桌台列表</span>
                    </el-menu-item>
                    <el-menu-item index='/table/add'>
                        <span>添加桌台</span>
                    </el-menu-item>
                    <el-menu-item index='/table/delete'>               
                        <span>删除桌台</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index='/category/list'>
                <i class='el-icon-message'></i>
                <span slot='title'>菜品类别</span>
            </el-menu-item>
            <el-submenu index='dish'>
                <template slot='title'>
                    <i class='el-icon-tickets'></i>
                    <span>菜品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item  index='/dish/list'>
                        <span>所有菜品</span>
                    </el-menu-item>
                    <el-menu-item index='/dish/add'>
                        <span>添加菜品</span>
                    </el-menu-item>
                    <el-menu-item index='/dish/delete'>               
                        <span>删除菜品</span>
                    </el-menu-item>
                    <el-menu-item index='/dish/update'>               
                        <span>修改菜品</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index='/order/list'>
                <i class='el-icon-date'></i>
                <span slot='title'>订单列表</span>
            </el-menu-item>
            <el-menu-item index='/Security'>
                <i class='el-icon-bell'></i>
                <span slot='title'>安全管理</span>
            </el-menu-item>
    </el-menu>
        </el-aside>
        <el-container>
            <!--顶部信息栏-->
            <el-header height='60px'>
                <mainheader></mainheader>
                <!--Vue的html中的驼峰法则变为烤串法则-->
            </el-header>
            <!--主体部分-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import mainheader from '../components/header'

   export default {
       data(){  //数据属性
           return {
            //    defaultOpeneds:['table']
           }
       },
       computed:{  //计算属性
            defaultOpeneds(){  //计算属性=数据属性操作方法
                if(this.$route.path.indexOf('/table')==0){
                    //当前用户正在访问/table/xxx
                    return ['table']
                }else if(this.$route.path.indexOf('/dish')==0){
                    return ['dish']
                }else{
                    return [];
                }
                
            },
            defaultActive(){
                //当前用户访问那一页,九江对应的菜单项置为激活
                return this.$route.path;
            }
       },
       beforeCreate() {
        //组件创建前先检查是否已经登录为管理员
        if(!this.$store.state.adminName){
            this.$router.push('/login')
        } 
       },
       mounted() {
       },
       components:{
        mainheader
    }
       
    }
</script>
<style lang="">
    
</style>