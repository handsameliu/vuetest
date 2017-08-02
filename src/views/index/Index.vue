<template>
  <div id="app">
    <img src="./assets/logo1.png">
    <router-link to='/'>hello</router-link>
    <router-link to='/world'>world</router-link>
    <group>
        <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <router-view></router-view>
  </div>
</template>

<script>
    const FastClick = require('fastclick')
    FastClick.attach(document.body);
    import { Group, XInput, XButton } from 'vux';
    export default {
      name: 'app',
      components:{
          Group, XInput, XButton
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
