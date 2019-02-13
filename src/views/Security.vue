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
            <el-form label-width='100px' :model="pwd" status-icon :rules="rules2" ref="pwd">
                <el-form-item label='旧密码' prop='oldPwd'>
                    <el-input type='password' placeholder='请输入旧密码' class='xfn-input' v-model='pwd.oldPwd' autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label='新密码' prop='newPwd'>
                    <el-input type='password' placeholder='请输入新密码' class='xfn-input' v-model='pwd.newPwd' autocomplete="off"></el-input>
                </el-form-item> 
                <el-form-item label='再输一次' prop='agPwd'>
                    <el-input type='password' placeholder='再输入一次' class='xfn-input' v-model='pwd.agPwd' autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' @click='handleSure()'>确认</el-button>
                    <el-button type='info' @click='handleQuit("pwd")'>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
   export default {
       data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入旧密码'));
                } else {
                if (this.pwd.oldPwd !== '') {
                    this.$refs.pwd.validateField('olPwd');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入新密码'));
                } else {
                if (this.pwd.agPwd !== '') {
                    this.$refs.pwd.validateField('agPwd');
                }
                callback();
                }
            };
            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.pwd.newPwd) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
           return {
               pwd:{
                   oldPwd:'',
                   newPwd:'',
                   agPwd:''
               },
               rules2:{
                   oldPwd:[{required: true,validator:validatePass,trigger: 'blur'}],
                   newPwd:[{required: true,validator:validatePass2,trigger: 'blur'}],
                   agPwd:[{required: true,validator:validatePass3,trigger: 'blur'}]
               }
           }
       },
       methods: {
           handleSure(){
                if(this.pwd.newPwd==this.pwd.agPwd&&this.pwd.newPwd!=''&&this.pwd.agPwd!=''){
                    this.$axios.patch(this.$store.state.globalSettings.apiUrl+'/admin',{aname:this.$store.state.adminName,oldPwd:this.pwd.oldPwd,newPwd:this.pwd.newPwd})
                        .then((res)=>{
                            var code=res.data.code;
                            if(code==400){
                                this.$message({
                                    showClose:true,
                                    message:'旧密码输入错误',
                                    type:'error'
                                })
                            }else if(code==200){
                                this.$message({
                                    showClose:true,
                                    message:'密码修改成功',
                                    type:'success'
                                })
                            }else{
                                this.$message({
                                    showClose:true,
                                    message:'密码修改失败',
                                    type:'error'
                                })
                            }
                            
                        })
                        .catch((err)=>{
                            console.error(err)
                        })

                }
           },
           handleQuit(all){
                this.$refs[all].resetFields();
           }
       },
    }
</script>
<style lang="scss">
    .xfn-security{
        .xfn-input{
             width:400px;
        }
    }
</style>