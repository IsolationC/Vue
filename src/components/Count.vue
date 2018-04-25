<template>
  <button @click="$store.commit('add')">+1</button>
  {{$store.state}}
  {{thisCount}}
</template>

<script>
  import store from '@/vuex/store'
  export default ({
    store,
    methods:{
        add(){

        }
    },
    computed:{
        thisCount(){
            return this.$store.state.count;
        }
    }
  })
</script>

<style scoped>

</style>
