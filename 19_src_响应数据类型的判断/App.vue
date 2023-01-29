<template>
  <div class="app">
    <h3>我是App组件:{{ name }}---{{ price }}</h3>
    <h3>当前求和为:{{ x }}</h3>
    <button @click="x++">点击+</button>
  </div>
</template>

<script>
import { ref, reactive, readonly, toRefs, isRef, isReactive, isReadonly, isProxy } from "vue"

export default {
  name:"App",
  setup(){
    let x = ref(0)
    let car = reactive({
      name:"奔驰",
      price:"44w"
    })
    car = readonly(car)

    console.log(isRef(x))
    console.log(isReactive(car))
    console.log(isReadonly(car))
    
    console.log(isProxy(x))
    console.log(x)

    return { ...toRefs(car), x }
  }
}
</script>