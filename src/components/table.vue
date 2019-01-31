<template>
    <div class="xfn-table-info">
        <el-card shadow='hover'>
            <div class='xfn-table'></div>
            <br>
            <el-button type='success' plain size='mini'>详情</el-button>
            <el-button type='danger' plain size='mini'>修改</el-button>
        </el-card>
        <br>
    </div>
</template>
<script>
    export default{
        props:["info"]
    }
</script>
<style lang="scss">
    .xfn-table{
        background:#eee;
        width:150px;
        height:60px;
        border-radius:50%;
    }
</style>