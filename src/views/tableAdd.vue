<template>
    <div class="xfn-table-add">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加桌台</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-form label-width='100px'>
            <el-form-item label='桌台编号:'>
                <el-button type="info" plain disabled>16</el-button>
                <span>  自动生成，无需赋值</span>
            </el-form-item>
            <el-form-item label='桌台别名:'>
                <el-input placeholder='给桌台取个吉利喜庆的名字吧' v-model='tableInfo.tname'></el-input>
            </el-form-item>
            <el-form-item label='桌台类型:'>
                <el-input placeholder='这是几人桌呢？如8人桌、3-4人桌...' v-model='tableInfo.type'></el-input>
            </el-form-item>
            <el-form-item label='初始状态:'>
                <el-radio-group v-model="tableInfo.status">
                    <el-radio :label="1">空闲</el-radio>
                    <el-radio :label="2" disabled>预定</el-radio>
                    <el-radio :label="3" disabled>占用</el-radio>
                    <el-radio :label="0" disabled>其他</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label='桌台类型:'>
                <el-button type='primary' @click='handlesubmit()'>提交</el-button>
            </el-form-item>
        </el-form> 
    </div>
</template>
<script>
   export default {
       data(){
           return{
               tableInfo:{
                   tname:'',
                   status:1,
                   type:''
               }
           }
       },
       methods:{
        handlesubmit(){
            var url=this.$store.state.globalSettings.apiUrl+'/admin/table';
            this.$axios.post(url,this.tableInfo)
                .then((res)=>{
                    var code=res.data.code;
                    if(code==400){
                        this.$message({
                            showClose:true,
                            message:'桌台添加失败',
                            type:'error'
                        })
                    }else if(code==200){
                        this.$message({
                            showClose:true,
                            message:'一个桌台添加成功',
                            type:'success'
                        })
                    }else{
                        this.$message({
                            showClose:true,
                            message:'此桌台已存在，请重新起名',
                            type:'error'
                        })
                    }})
                .catch((err)=>{
                    console.error(err)
                })

        }
       }
    }
</script>
<style lang="">
    
</style>