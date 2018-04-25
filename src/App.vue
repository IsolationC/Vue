<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="home">首页</button>
    <button @click="back">上一页</button>
    <button @click="forward">下一页</button>
    <router-link to="/">return</router-link>
    <router-link to="/test/mmmm/16">Test</router-link>
    <router-link :to="{name:'Comp2',params:{name:'miao',age:20}}">Comp2</router-link>
    <router-link to="/test/compa">Compa</router-link>
    <router-link to="/home">首页</router-link>
    <router-link to="/cdx/yuyu/24">重定向传值</router-link>
    <router-link to="/comp3/">别名</router-link>
    <router-link to="/count">count</router-link>
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      home(){
          this.$router.push('/')
      },
      back(){
        this.$router.go(-1)
      },
      forward(){
        this.$router.go(1)
      }
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
