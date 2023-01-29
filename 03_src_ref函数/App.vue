<template>
  <h1>一个人的信息</h1>
  <p>名字：{{ name }},年龄：{{ age }}</p>
  <h3>工作：{{ job.type }},薪资：{{ job.salary }}</h3>
  <button @click="change">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    // 初始化数据--不是响应数据
    // let name = "lilei";
    // let age = 18;

    // 初始化数据--响应式数据
    let name = ref("lilei");
    let age = ref(18);
    let job = ref({
      type: "前端开发",
      salary: "1k",
    });

    function change() {
      // 通过.value获取数据修改响应式数据---ref()给传入的参数包裹了一个RefImpl
      name.value = "hmm";
      age.value = 20;

      // ref给job.value包裹了一个Proxy
      job.value.type = "ui设计师";
    }

    return {
      name,
      age,
      job,

      change,
    };
  },
};
</script>
