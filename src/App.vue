<template>
  <div id="app">
     <top></top>
    <router-view></router-view>
    <footerbottom></footerbottom>
  </div>
</template>
<script>
  import  top from "@/components/top"
  import  footerbottom from "@/components/footerbottom"
export default {
  name: 'App',
  components:{
      top,
      footerbottom
  }
}
</script>


<style>
  body,div,ul,li {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li:hover,span:hover,dt:hover,dd:hover,img:hover{
    cursor:pointer;
  }
</style>
