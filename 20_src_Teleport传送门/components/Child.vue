<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Sun />
  </div>
</template>

<script>
import Sun from "./Sun.vue";
export default {
  name: "Child",
  components: {
    Sun,
  },
};
</script>

<style>
.child {
  padding: 10px;
  background: lightcoral;
}
</style>