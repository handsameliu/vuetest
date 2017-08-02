<template lang="html">
    <div id="app">
        测量数据
        {{msg}}
        {{message}}
        <button v-on:click="sendParentMsg">给父级传值</button>
    </div>
</template>
<script>
    import eventHub from '../assets/eventHub' 
    const FastClick = require('fastclick')
    FastClick.attach(document.body);
    export default {
        name:'recordIndex',
        props:['message'],
        data(){
            return {
                msg:'默认值'
            }
        },
        created(){
            console.log(111);
        },
        methods:{
            sendParentMsg:function(){
                this.$emit('listenToChild','我这里是子组件发出的信息')
            }
        },
        mounted(){
            let _this = this;
            eventHub.$on('username',(msg) => {
                console.log('msg',msg);
                _this.msg = msg;
            })
        }
    }
</script>
<style scoped>

</style>