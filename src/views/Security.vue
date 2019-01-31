<template>
    <div class="xfn-security">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>安全管理</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-card shadow='never'>
            <div slot='header'>
                <span>修改管理员密码</span>
            </div>
            <el-form label-width='100px'>
                <el-form-item label='旧密码'>
                    <el-input placeholder='请输入旧密码' class='xfn-input'></el-input>
                </el-form-item>
                <el-form-item label='新密码'>
                    <el-input placeholder='请输入新密码' class='xfn-input'></el-input>
                </el-form-item> 
                <el-form-item label='再输一次'>
                    <el-input placeholder='再输入一次' class='xfn-input'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary'>确认</el-button>
                    <el-button type='info'>取消</el-button>
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
    .xfn-security{
        .xfn-input{
             width:400px;
        }
    }
</style>