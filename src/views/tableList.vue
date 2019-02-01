<template>
    <div class="xfn-table-list">
        <el-breadcrumb>
            <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
            <el-breadcrumb-item>桌台列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-row  :gutter="10">
            <el-col :xs='12' :sm='8' :md='6' :lg='4' :xl='2' v-for='(t,index) of tableList' :key='index'>
                <xfn-table :info='t'></xfn-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import table from '../components/table'
   export default {
       data(){
           return {
               tableList:[]
           }
       },
       mounted() {
           var url=this.$store.state.globalSettings.apiUrl+'/admin/table'
           this.$axios.get(url)
                .then(({data})=>{
                    console.log(data)
                    this.tableList=data.data
                })
                .catch((err)=>{
                    console.error(err)
                })
       },
       components:{
           "xfn-table":table
       }
    }
</script>
<style lang="">
    
</style>