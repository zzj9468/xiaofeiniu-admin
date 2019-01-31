<template>
    <div class="xfn-table-delete">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
            <el-breadcrumb-item>删除桌台</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-form label-width='100px'>
            <el-form-item label='桌台编号：'>
                <el-input placeholder='请输入要删除的桌台编号' class='xfn-input'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
   export default {

    }
</script>
<style lang="scss">
    .xfn-table-delete{
        .xfn-input{
            width:300px;
        }
    }
</style>