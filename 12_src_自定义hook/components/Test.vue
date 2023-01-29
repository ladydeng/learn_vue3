<template>
  <p>当前点击X坐标：{{ point.x }}，Y坐标：{{ point.y }}</p>
</template>

<script>
import savePoint from "../hooks/savePoint";
export default {
  name: "Test",
  setup() {
    let point = savePoint();
    return { point };
  },
};
</script>

<style>
</style>