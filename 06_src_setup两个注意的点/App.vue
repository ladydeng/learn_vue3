<template>
  <Demo sex="男" hobby="打篮球" @sayHello="show">
    <!-- vue3插槽的写法v-slot:插槽名 -->
    <template v-slot:ww>  
      <span>测试context.slots</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    function show(name) {
      alert(`我叫${name}`);
    }

    return {
      show,
    };
  },
};
</script>
