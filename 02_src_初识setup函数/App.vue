<template>
  <h1>一个人的信息</h1>
  <p>名字：{{ name }},年龄：{{ age }}</p>
  <button @click="hello">点击say hello</button>
  &nbsp;
  &nbsp;
  <button @click="welcome">点击say welcome</button>
  <br>
  <br>
  <button @click="test1">测试在vue2获取vue3数据</button>  <!-- 可 -->
  <button @click="test2">测试在vue3的setup获取vue2数据</button>   <!-- 不可 -->
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  data(){
    return {
      // 当vue2和vue3定义的状态重名时，以vue3（setup）为主
      name:"hmm",
      sex:"男"
    }
  },
  methods:{
    welcome(){
      alert(`welcome，性别：${this.sex}`)
    },

    test1(){
      console.log(this.name)
      console.log(this.age)
      console.log(this.hello)
    }
  },
  // setup函数不能时sync异步函数
  setup() {
    // 初始化数据
    let name = "lilei";
    let age = 18;

    // 操作数据的方法
    function hello() {
      alert(`hello，我叫${name},我今年${age}`);
    }

    function test2(){
      console.log(this.sex)
      console.log(this.welcome)
    }

    // 两种返回方式
    // 1. 返回一个对象（常用）
    return {
      name,
      age,

      hello,
      test2
    };

    // 2. 返回一个函数（渲染函数）
    // return () => h("h1", `hello，我叫${name},我今年${age}`);
  },
};
</script>
