<template>
    <div class="xfn-dish-update">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
            <el-breadcrumb-item>修改菜品</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-card>
            <div slot='header'>
                <span>根据编号查找菜品：</span>
            </div>
            <el-form label-width='100px'>
                <el-form-item label='菜品编号:'>
                    <el-input placeholder='请输入菜品编号' class='xfn-input'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' disabled>提交修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <br>
        <el-card>
            <div slot='header'>
                <span>根据名称查找菜品：</span>
            </div>
            <el-form label-width='100px'>
                <el-form-item label='菜品名称:'>
                    <el-input placeholder='请输入菜品名称' class='xfn-input'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' disabled>提交修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
   export default {
       
    }
</script>
<style lang="scss">
    .xfn-dish-update{
        .xfn-input{
                width:350px;
            }
       }
</style>