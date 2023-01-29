<template>
  <h4>{{ p }}</h4>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.serve.salary }}</h3>
  <button @click="name += '!'">修改人的姓名</button>
  <button @click="age++">修改人的年龄</button>
  <button @click="job.serve.salary += 'k'">点击修改薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let p = reactive({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });

    return {
      p,
      // toRef把一个对象类型的响应式数据的某个属性单独拿出来，并带有响应式
      /* name: toRef(p, "name"),
      age: toRef(p, "age"),
      salary: toRef(p.job.serve, "salary"), */

      // toRefs把一个对象的多个属性单独拿出来，并带有响应式
      ...toRefs(p)
    };
  },
};
</script>