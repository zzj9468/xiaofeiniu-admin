<template>
    <div class="settings">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>全局设置</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-card class="box-card" shadow='never'>
            <el-form label-width='110px'>
                <el-form-item label='应用名称:'>
                    <el-input v-model='formData.appname'></el-input>
                </el-form-item>
                <el-form-item label='应用API网址:'>
                    <el-input v-model='formData.apiUrl'></el-input>
                </el-form-item>
                <el-form-item label='后台管理端网址'>
                    <el-input v-model='formData.adminUrl'></el-input>
                </el-form-item>
                <el-form-item label='客户端App网址'>
                    <el-input v-model='formData.appUrl'></el-input>
                </el-form-item>
                <el-form-item label='ICP备案号'>
                    <el-input v-model='formData.icp'></el-input>
                </el-form-item>
                <el-form-item label='版权声明'>
                    <el-input v-model='formData.copyright'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='sure'>保存修改</el-button>
                    <el-button @click='quit'>取消修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
   export default {
       data(){
           return{
               formData:{
                   appname:'',
                   apiUrl:'',
                   adminUrl:'',
                   appUrl:'',
                   copyright:'',
                   icp:''
               }
           }
       },
       created(){
           //将$store存储中的全局配置数据赋值给中间formData方便表单元素双向绑定数据
           //引用赋值,两个变量指向同一个对象,任意一个修改,另一个也会修改:
                //this.formData=this.$store.state.globalSettings
            //值类型赋值,对象复制,创建出一模一样的对象:
                //this.formData.appname=this.$store.state.globalSettings.appname;
                    //    this.formData={};
            this.setSetting();
       },
       methods:{
           sure(){
               var url=this.$store.state.globalSettings.apiUrl+'/admin/setting';
               this.$axios.put(url,this.formData)
                    .then((res)=>{
                        if(res.data.code==1){
                            this.$message.success('全局消息修改成功'); 
                            //修改store中的全局设置
                            this.$store.state.globalSettings.appname=this.formData.appname;
                            this.$store.state.globalSettings.apiUrl=this.formData.apiUrl;
                            this.$store.state.globalSettings.adminUrl=this.formData.adminUrl;
                            this.$store.state.globalSettings.appUrl=this.formData.appUrl;
                            this.$store.state.globalSettings.copyright=this.formData.copyright;
                            this.$store.state.globalSettings.icp=this.formData.icp;
                        }else{
                           this.$message.error('全局消息修改失败');
                        }               
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
           },
           quit(){
               this.setSetting();
           },
           setSetting(){
               this.formData.appname=this.$store.state.globalSettings.appname;
               this.formData.apiUrl=this.$store.state.globalSettings.apiUrl;
               this.formData.adminUrl=this.$store.state.globalSettings.adminUrl;
               this.formData.appUrl=this.$store.state.globalSettings.appUrl;
               this.formData.copyright=this.$store.state.globalSettings.copyright;
               this.formData.icp=this.$store.state.globalSettings.icp;
           }

       }
    }
</script>
<style lang="">
    
</style>