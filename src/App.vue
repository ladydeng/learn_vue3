<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- vue3内置组件Suspense与异步引入组件配合使用 -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>正在加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
// import Child from "./components/Child.vue"  //静态引入
const Child = defineAsyncComponent(() => import("./components/Child.vue")); //异步引入

export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.app {
  padding: 10px;
  background: lightskyblue;
}
</style>