<template>
  <h3>x的值为：{{ x.y }}</h3>
  <!-- 替换x原来的y值 -->
  <button @click="x={y:100}">点击x加</button>
  <hr />
  <h4>{{ p }}</h4>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.serve.salary }}</h3>
  <button @click="name += '!'">修改人的姓名</button>
  <button @click="age++">修改人的年龄</button>
  <button @click="job.serve.salary += 'k'">点击修改薪资</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // shallowReactive只对---对象---的第一层数据响应
    let p = shallowReactive({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });
    
    // 可以响应
    // let x = shallowRef(0);

    // 不可以响应，可以替换，shallowRef处理---对象---类型的响应数据时，不会内部转reactive
    let x = shallowRef({
      y:0
    })
    console.log(x)

    return {
      p,
      x,
      ...toRefs(p),
    };
  },
};
</script>