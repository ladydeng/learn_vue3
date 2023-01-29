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
import { ref, watch } from "vue";
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

    /*  watch监视ref数据：
        1. 当我们给ref()传入一个对象时，ref内部实际调用的是reactive
        2. 所以我们监视一个对象类型的ref时，加上.value或者开启深度监视deep:true
     */
    // watch(p.value, (newVal, oldVal) => {
    //   console.log("p的值发生变化了",newVal,oldVal)
    // })

    watch(p, (newVal, oldVal) => {
      console.log("p的值发生变化了",newVal,oldVal)
    },{deep:true})

    return {
      count,
      msg,
      p,
    };
  },
};
</script>