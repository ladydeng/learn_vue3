<template>
  <h3>当前求和为：{{ count }}</h3>
  <button @click="count++">点击+1</button>
  <hr />
  <p>当前点击X坐标：{{ point.x }}，Y坐标：{{ point.y }}</p>
</template>

<script>
import { ref } from "vue";
import savePoint from "../hooks/savePoint";
export default {
  name: "Demo",
  setup() {
    let count = ref(0);
    let point = savePoint();

    return { count, point };
  },
};
</script>