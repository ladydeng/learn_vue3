<template>
  <div class="child">
    <h3>我是Child组件：{{ count }}</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  // setup在父组件Suspense与异步引入的配合，可以是一个异步函数
  async setup() {
    let count = ref(0);

    let func = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ count });
      }, 3000);
    });

    return await func;

    // return { count }
  },
};
</script>

<style>
.child {
  padding: 10px;
  background: lightcoral;
}
</style>