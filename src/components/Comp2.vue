<template>
  <div>
    <h1>OAO!!!!</h1>
    <h2>姓名：{{$route.params.name}}</h2>
    <h2>年龄：{{$route.params.age}}</h2>
  </div>
</template>

<script>
  export default{
    name:"Comp2",
    beforeRouteEnter:(to,from,next)=>{
        console.log("进入");
        next()
    },
    beforeRouteLeave:(to,from,next)=>{
      console.log("离开");
      next()
    }
  }
</script>

<style scoped>

</style>
