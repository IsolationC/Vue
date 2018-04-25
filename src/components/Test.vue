<template>
<div>
  <h1>QAQ</h1>
  <h2>姓名：{{$route.params.name}}</h2>
  <h2>年龄：{{$route.params.age}}</h2>
  <router-view/>
</div>
</template>

<script>
  export default{
      name:"Test"
  }
</script>

<style scoped>

</style>
