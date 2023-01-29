<template>
  <h3>当前求和为：{{ count }}</h3>
  <button @click="count++">点击+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  name: "Demo",
  setup() {
    let count = ref(0);

    // 通过组合式API的形式使用生命周期钩子，beforeCreate与created相当于setup
    onBeforeMount(() => {
      console.log("---onBeforeMount---")
    })

    onMounted(() => {
      console.log("---onMounted---")
    })

    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---")
    })

    onUpdated(() => {
      console.log("---onUpdated---")
    })

    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---")
    })

    onUnmounted(() => {
      console.log("---onUnmounted---")
    })

    return {
      count,
    };
  },

  // 通过配置项的形式使用生命周期钩子
  //#region 
/*   beforeCreate(){
    console.log("---beforeCreate---")
  },

  created(){
    console.log("---created---")
  },

  beforeMount(){
    console.log("---beforeMount---")
  },

  mounted(){
    console.log("---mounted---")
  },

  beforeUpdate(){
    console.log("---beforeUpdate---")
  },

  updated(){
    console.log("---updated---")
  },

  beforeUnmount(){
    console.log("---beforeUnmount---")
  },

  unmounted(){
    console.log("---unmounted---")
  } */
  //#endregion
};
</script>