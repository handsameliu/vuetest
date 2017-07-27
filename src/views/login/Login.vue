<!-- 在*.vue文件，
template标签里写html代码，且template直接子级只能有一个标签。
style标签里写样式，
script里面写js代码 -->

<template>
    <div id="login">
        <label>用户名：</label><input type="text" />
        <label>验证码：</label><input type="text" />
        <button>登陆</button>{{loginMsg}}
    </div>
</template>

<script>
    export default {
        name: 'login',  /* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
        data() {
            return {
                loginMsg: '',/* 这里是数据，一定记住数据一定要放data中然后用return返回 */
            }
        },
        created:function(){
            var vm = this;
            this.$http({
                method:'POST',
                url:'/api/user/signIn',
                data:{'userName':'112','password':'222'}
            }).then((result) => {
                let data = result.data;
                vm.loginMsg = data;
                // that.$set('alllist',data);
            },(error) => {
                console.log(error);
            })
        },
        methods:{
            
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 这里的样式只对当前页面有效不会影响其他页面,还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less-->
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
