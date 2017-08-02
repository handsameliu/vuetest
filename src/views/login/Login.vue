<!-- 在*.vue文件，
template标签里写html代码，且template直接子级只能有一个标签。
style标签里写样式，
script里面写js代码 -->

<template>
    <div id="app">
        <group class="weui-cells_form">
            <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <x-input title="验证码" class="weui-vcode" placeholder="请输入收到的验证码" keyboard="number">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
        </group>
        <div style="padding:15px;">
            <x-button type="primary">登 陆</x-button>
        </div>
        {{loginMsg}}
    </div>
</template>

<script>
    const FastClick = require('fastclick')
    FastClick.attach(document.body);
    import { Group, XInput, XButton } from 'vux';
    export default {
        name: 'login',  /* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
        data() {
            return {
                loginMsg: '',/* 这里是数据，一定记住数据一定要放data中然后用return返回 */
            }
        },
        created:function(){
            var vm = this;
            this.$http.post('/api/user/signIn',{'userName':'112','password':'222'}).then((result) => {
                let data = result.data;
                vm.loginMsg = data;
                // that.$set('alllist',data);
            },(error) => {
                console.log(error);
            })
        },
        components:{
            Group,
            XInput,
            XButton,
        },
        methods:{
            onShow () {
                console.log('on show')
            },
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 这里的样式只对当前页面有效不会影响其他页面,还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less-->
<style lang="less">@import '~vux/src/styles/reset.less';</style>
<style scoped>
    #login {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
