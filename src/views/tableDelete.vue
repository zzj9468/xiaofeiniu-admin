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
                <el-input placeholder='请输入要删除的桌台编号' class='xfn-input' v-model='tid'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click='handleDel()'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
   export default {
       data(){
           return{
               tid:''
           }
       },
       methods: {
           handleDel(){
               if(this.tid){
                   var url=this.$store.state.globalSettings.apiUrl+'/admin/table/'+this.tid;
                   this.$axios.delete(url)
                        .then((res)=>{
                            var code=res.data.code;
                            if(code==401){
                                this.$message({
                                    showClose:true,
                                    message:'桌台不存在',
                                    type:'error'
                                })
                            }else if(code==200){
                                this.$message({
                                    showClose:true,
                                    message:'桌台删除成功',
                                    type:'success'
                                })
                            }else{
                                this.$message({
                                    showClose:true,
                                    message:'桌台删除失败',
                                    type:'error'
                                })
                            }                               
                        })
                        .catch((err)=>{
                            console.error(err)
                        })
               }
           }
       },
    }
</script>
<style lang="scss">
    .xfn-table-delete{
        .xfn-input{
            width:300px;
        }
    }
</style>