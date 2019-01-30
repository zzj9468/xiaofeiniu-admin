<template>
    <div class="login">
        <el-card class='xfn-login-card'>
            <div slot='header'>管理员登陆</div>
            <div>
                <el-form label-width='80px'>
                    <el-form-item label='管理员名:'>
                        <el-input v-model="formData.aname" placeholder='请输入管理员名'></el-input>
                    </el-form-item>
                    <el-form-item label='登录密码:'>
                        <el-input type='password' v-model="formData.apwd" placeholder='请输入管理员密码'></el-input>
                    </el-form-item>
                    <el-form-item>
                    <!--除了el-button在监听事件时不用写@click.native(因为Vue已经创建好了),但是其他的元素必须写.native-->
                        <el-button type='primary' @click='doLogin'>登录</el-button>
                        <el-button @click='doCancel'>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
   export default {
        data(){  //普通组件的模型数据是函数的返回值
            return {
                formData:{  //表单中用户输入的两个数据
                    aname:'admin',
                    apwd:'123456'
                }
            }
        },
        methods:{
            doLogin(){
                var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
                this.$axios.get(url)
                    .then((result)=>{
                        // console.log(result.data);
                        if(result.data.code==200){
                            this.$store.commit('setAdmin',this.formData.aname);
                            this.$router.push('/main')
                        }else if(result.data.code==400){
                            //登录失败--警告框
                            this.$alert('用户名或密码有误','登录失败',{type:'error'})
                                .then(()=>{})
                                .catch(()=>{})
                        }
                    })
                    .catch((err)=>{
                        console.error(err);
                    })
            },
            doCancel(){//清楚用户的输入
                this.formData.aname='';
                this.formData.apwd='';
            }
        }

    }
</script>
<style lang="scss">
    .xfn-login-card{
        width:450px;
        margin:150px auto;
        .el-card__header{
            text-align:center;
            font-size:1.2em;
        }
    }
</style>