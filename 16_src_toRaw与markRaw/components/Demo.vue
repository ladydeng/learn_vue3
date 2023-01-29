<template>
  <h3>x的值为：{{ x }}</h3>
  <button @click="x++">点击x加</button>
  <hr />
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.serve.salary }}</h3>
  <h3>车信息：{{ car }}</h3>
  <button @click="name += '!'">修改人的姓名</button>
  <button @click="age++">修改人的年龄</button>
  <button @click="job.serve.salary += 'k'">点击修改薪资</button>
  <button @click="car.carName += '!'">修改车</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    let x = ref(0);
    let p = reactive({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });
    // toRaw把reactive数据转化为原生数据--不响应
    // p = toRaw(p);

    // 标记一个对象，使其不成为一个响应式对象
    p.car = markRaw({
      carName: "奔驰",
      price: "44w",
    });

    return {
      x,
      ...toRefs(p),
    };
  },
};
</script>