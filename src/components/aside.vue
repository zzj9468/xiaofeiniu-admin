<template>
    <el-menu default-active='2-1'>
        <el-menu-item index='1'>
            <i class='el-icon-setting'></i>
            <span>全局设置</span>
        </el-menu-item>
        <el-submenu index='2'>
            <template>
                <i class='el-icon-menu'></i>
                <span>桌台管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index='2-1'>
                    <i class=''></i>
                    <span>所有桌台</span>
                </el-menu-item>
                <el-menu-item index='2-2'>
                    <i class=''></i>
                    <span>添加桌台</span>
                </el-menu-item>
                <el-menu-item index='2-3'>               
                    <i class=''></i>
                    <span>删除桌台</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
         <el-menu-item index='3'>
            <i class='el-icon-message'></i>
            <span>菜品类别</span>
        </el-menu-item>
        <el-submenu index='4'>
            <template>
                <i class='el-icon-tickets'></i>
                <span>菜品管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  index='4-1'>
                    <span>所有菜品</span>
                </el-menu-item>
                <el-menu-item index='4-2'>
                    <span>添加菜品</span>
                </el-menu-item>
                <el-menu-item index='4-3'>               
                    <span>删除菜品</span>
                </el-menu-item>
                <el-menu-item index='4-4'>               
                    <span>修改菜品</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index='5'>
            <i class='el-icon-date'></i>
            <span>订单列表</span>
        </el-menu-item>
        <el-menu-item index='6'>
            <i class='el-icon-bell'></i>
            <span>安全管理</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
   export default {
       
    }
</script>
<style lang="">
    
</style>