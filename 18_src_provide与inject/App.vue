<template>
  <div class="app">
    <h3>我是App组件:{{ name }}---{{ price }}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive, provide, toRefs } from "vue"
import Child from "./components/Child.vue"
export default {
  name:"App",
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:"奔驰",
      price:"44w"
    })

    // 给后代组件传递参数
    provide("car",car)

    return { ...toRefs(car) }
  }
}
</script>

<style>
.app{
    padding: 10px;
    background: lightskyblue;
}
</style>