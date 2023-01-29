<template>
  <h1>一个人的信息</h1>
  <p v-show="person.name">名字：{{ person.name }}</p>
  <p>年龄：{{ person.age }}</p>
  <p v-show="person.sex">性别：{{ person.sex }}</p>
  <h3>工作：{{ person.job.type }},薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="change">修改信息</button>
  <button @click="deleteName">删除name属性</button>
  <button @click="addSex">添加sex属性</button>
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
      hobby:["跑步","唱歌","跳舞"]
    });

    function change() {
      person.name = "hmm";
      person.age = 20;
      person.job.type = "ui设计师";
      person.hobby[0] = "写字"
    }

    function deleteName(){
      delete person.name
    }

    function addSex(){
      person.sex = "男"
    }

    return {
      person,

      change,
      deleteName,
      addSex
    };
  },
};
</script>
