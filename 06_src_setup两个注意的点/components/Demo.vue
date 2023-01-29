<template>
  <h3>
    我叫：{{ p.name }},今年：{{ p.age }},性别：{{ sex }},爱好：{{ hobby }}
  </h3>
  <button @click="test">测试context.emit</button>
  <h3>
      <slot name="ww"/>
  </h3>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["sex", "hobby"], //声明接收
  emits: ["sayHello"], //声明绑定的自定义事件
  // setup是在beforeCreate之前触发，所以this出现undefined
  setup(props, context) {
    // console.log("----", props);  //父组件传给子组件的参数
    // console.log("----", context.attrs);  //如果子组件不声明接收，那么子组件会将父组件传过来的参数放在context.attrs里
    // console.log("----", context.emit); //相当于vue2的this.$emit()，触发自定义事件
    console.log("----", context.slots); //插槽
    let p = reactive({
      name: "张三",
      age: 10,
    });

    function test() {
      context.emit("sayHello", p.name);
    }

    return {
      p,
      test,
    };
  },
};
</script>

<style>
</style>