<template>
  <h3>当前求和为：{{ count }}</h3>
  <h3>{{ msg }}</h3>
  <button @click="count++">点击+1</button>
  <button @click="msg += '!'">修改msg</button>
  <hr />
  <h3>姓名：{{ p.name }}，年龄：{{ p.age }}</h3>
  <button @click="p.name += '!'">修改人的姓名</button>
  <button @click="p.age++">修改人的年龄</button>
  <hr />
  <h3>薪资：{{ p.job.serve.salary }}</h3>
  <button @click="p.job.serve.salary += 'k'">点击修改薪资</button>
</template>

<script>
import { ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let count = ref(0);
    let msg = ref("hello");
    let p = ref({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });

    /* 
    一、watch与watchEffect的区别：
      1. watch：既要指明监视属性，也要指明监视方法
      2. 不用指明监视的属性，监视回调中用到哪个属性就监视哪个属性

    二、watchEffect与computed的相似之处：
      1. watchEffect更注重过程（回调函数的函数体），不用写返回值
      2. computed更注重结果（回调函数的返回值），要写返回值
     */

    // watch(count, (newVal, oldVal) => {
    //   console.log("count发生变化：", newVal, oldVal);
    // });

    watchEffect(() => {
      let w = msg.value
      console.log("执行msg的计算逻辑");
    }); //immediate配置无效

    return {
      count,
      msg,
      p,
    };
  },
};
</script>