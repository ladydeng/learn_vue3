<template>
  <div class="sun">
    <h3>我是Sun组件:{{ name }}---{{ price }}</h3>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "Sun",
  setup() {
    //   接收祖组件传递的参数
    let car = inject("car");

    return { ...toRefs(car) };
  },
};
</script>

<style>
.sun {
  padding: 10px;
  background: lightsalmon;
}
</style>