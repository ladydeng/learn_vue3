<template>
  <div class="child">
    <h3>我是Child组件:{{ name }}---{{ price }}</h3>
    <Sun />
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
import Sun from "./Sun.vue";
export default {
  name: "Child",
  components: {
    Sun,
  },
  setup() {
    // 接收父组件传递的参数
    let car = inject("car");

    return { ...toRefs(car) };
  },
};
</script>

<style>
.child {
  padding: 10px;
  background: lightcoral;
}
</style>