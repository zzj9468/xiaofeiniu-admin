<template>
    <div class="xfn-category-list">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
            <el-breadcrumb-item>类别列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-button type='primary' @click='handleAdd'>+添加新的类别列表</el-button>
        <br>
        <el-table width='100%' border :data='categoryList' stripe>
            <el-table-column prop="cid" label="编号" ></el-table-column>
            <el-table-column prop="cname" label="名称"></el-table-column>
            <el-table-column prop="address" label="操作">
                <template slot-scope='{row,$index}'>
                    <el-button size='mini' type='success' plain @click="handleUpdate(row,$index)">修改</el-button>
                    <el-button size='mini' type='danger' plain @click='handleDelete(row,$index)'>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
   export default {
       data(){
           return{
               categoryList:[]
           }
       },
       mounted() {
           var url=this.$store.state.globalSettings.apiUrl+'/admin/category'
           this.$axios.get(url)
                .then((res)=>{
                    this.categoryList=res.data.data;
                })
                .catch((err)=>{
                    console.error(err)
                })
       },
       methods:{
           handleAdd(){
                this.$prompt('请输入新的菜品类别的名称','添加菜品类别', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.$axios.post(this.$store.state.globalSettings.apiUrl+'/admin/category',{cname:value})
                        .then((res)=>{
                            if(res.data.code==200){
                                this.categoryList.push({cid:res.data.cid,cname:value})
                                this.$message.success('添加新菜品成功');
                            }else{
                                this.$message.info('添加失败');
                            }
                        })
                        .catch((err)=>{
                            console.error(err)
                        })
                    
                }).catch(() => {
                    this.$message.info('取消输入');       
                });
           },
           handleUpdate(row,i){
                this.$prompt('请输入新的菜品类别的名称','修改菜品类别', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.$axios.put(this.$store.state.globalSettings.apiUrl+'/admin/category',{cid:row.cid,cname:value})
                        .then((res)=>{
                            if(res.data.code==200){
                                this.categoryList[i].cname=value;
                                 this.$message.success('修改新菜品成功');
                            }else{
                                this.$message.info('修改失败');
                            }
                        })
                        .catch((err)=>{
                            console.error(err)
                        })
                   
                }).catch(() => {
                    this.$message.info('取消输入');       
                });

           },
           handleDelete(row,i){
               this.$confirm('删除操作不可撤销,您确定吗?','警告',{type:"warning"})
                    .then(()=>{
                        var url=this.$store.state.globalSettings.apiUrl+'/admin/category/'+row.cid
                        this.$axios.delete(url)
                                .then((res)=>{
                                    if(res.data.code==200){
                                        this.categoryList.splice(i,1);
                                        this.$message.success('菜品类别删除成功')
                                    }else{
                                        this.$message.error('类别删除出差错')
                                    }
                                })                        
                    })
                    .catch(()=>{})

           }
       }
    }
</script>
<style lang="">
    
</style>