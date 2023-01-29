<template>
  <h1>一个人的信息</h1>
  <p>名字：{{ person.name }},年龄：{{ person.age }}</p>
  <h3>工作：{{ person.job.type }},薪资：{{ person.job.salary }}</h3>
  <button @click="change">修改信息</button>
</template>

<script>
// reactive用于处理一个对象（或数组）类型的响应式数据
import { reactive } from "vue";
export default {
  name: "App",

  setup() {
    let person = reactive({
      name: "lilei",
      age: 18,
      job: {
        type: "前端开发",
        salary: "1k",
      },
    });

    function change() {
      person.name = "hmm";
      person.age = 20;
      person.job.type = "ui设计师";
    }

    return {
      person,

      change,
    };
  },
};
</script>
