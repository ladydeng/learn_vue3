<template>
  <h3>x的值为：{{ x }}</h3>
  <button @click="x++">点击x加</button>
  <hr />
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.serve.salary }}</h3>
  <button @click="name += '!'">修改人的姓名</button>
  <button @click="age++">修改人的年龄</button>
  <button @click="job.serve.salary += 'k'">点击修改薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    let x = ref(0)

    let p = reactive({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });

    // 数据只读
    // p = readonly(p)

    // 对象类型响应式数据---第一层---只读
    p = shallowReadonly(p)

    return {
      x,
      ...toRefs(p),
    };
  },
};
</script>