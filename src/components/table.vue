<template>
    <div class="xfn-table-info">
        <el-card shadow='hover'>
            <div class='xfn-table' :style='{background:getTableColor(info.status)}'>{{info.tid}}号桌:{{info.status | tableStatus}}</div>
            <br>
            <el-row justify='center'>
                <el-col :span='12'><el-button type='success' plain size='mini' class='xfn-table-col' @click='handleDetail()'>详情</el-button></el-col>  
                <el-col :span='12'><el-button type='danger' plain size='mini' class='xfn-table-col' @click='handleupdate()'>修改</el-button></el-col>  
            </el-row>
        </el-card>
        <!--桌台详情的对话框-->
        <el-dialog
            :title="info.tid+'号桌台详情'"
            :visible='dialogTableDetailVisible' 
            :before-close='closeDialogDetail' >
        <!--对话框主体-->
            <el-tabs tab='border-card'>
                <el-tab-pane label='桌台状态'>状态加载中..</el-tab-pane>
                <el-tab-pane label='桌台二维码' @tab-click='makeQrcoode()'>
                    <canvas id='qrcanvas'></canvas>
                </el-tab-pane>
            </el-tabs>
            <div slot='footer'>
                <el-button @click='dialogTableDetailVisible=false' type='primary'>确定</el-button>
            </div>
        </el-dialog>
        <br>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                dialogTableDetailVisible:false
            }
        },
        props:["info"],
        methods:{
            getTableColor(n){
                if(n==1) return '#67C23A'
                else if(n==2) return '#E6A23A'
                else if(n==3) return '#F56C6C'
                else return '#909399'
            },
            handleDetail(){
                // console.log(this.info)  当前桌子的信息
                this.dialogTableDetailVisible=true;

            },
            handleupdate(){

            },
            closeDialogDetail(){
                this.dialogTableDetailVisible=false;
            },
            makeQrcoode(){
                //创建二维码,注意!!此方法不能在当前组件mounted中调用,因为绘图必须的canvas在el-dialog中,对话框在组件加载时并不在DOM树上
                var qrcode=require('qrcode');
                var canvas=document.getElementById('qrcanvas');
                //每个桌子对应的url形如:http://127.0.0.1:8092/#/3
                var tableUrl=this.$store.state.globalSettings.appUrl+'/#/'+this.info.tid;
                qrcode.toCanvas(canvas,tableUrl,{errorCorrectionLevel:'H'},(err,canvas)=>{
                    console.log(err);
                    console.log(canvas);
                });
        }

    }
}
</script>
<style lang="scss">
    .xfn-table-info{
        text-align:center;
        .xfn-table{
            width:100%;
            height:100px;
            border-radius:50%;
            border:1px solid #aaa;
            box-shadow:3px -3px 17px #aaa;
            margin:5px auto;
            line-height:100px;
        }
    .xfn-table-col{
        margin:0 auto;
    }
    }   
</style>