<template lang="html">
    <div id="app">
        <div id="header">
            <router-link to="/"><div>测量数据</div></router-link>
            <router-link to="/recordTimeLine"><div>健康档案</div></router-link>
        </div> 
        <router-view></router-view>  
        <!-- <recordIndex v-bind:message='global' v-on:listenToChild="showChildMsg"></recordIndex>
        <recordTimeLine></recordTimeLine> -->
    </div>
</template>
<script>
    const FastClick = require('fastclick')
    FastClick.attach(document.body);
    import recordTimeLine from './components/recordTimeLine'
    import recordIndex from './components/recordIndex'
    export default {
        name:'records',
        data(){
            return {
                global:{address:'北京'}
            }
        },
        methods:{
            showChildMsg(msg){
                alert(msg)
            }
        },
        components:{recordTimeLine,recordIndex},
    }
</script>
<style lang="less">@import '~vux/src/styles/reset.less';</style>
<style scoped>
#header{
    width:100%;
    height:2rem;
    font-size:0.9rem;
}
#header div{
    display: inline-block;
    width:49%;
    height:100%;
    text-align: center;
    line-height: 2rem;
}
</style>

