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
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    let count = ref(0);
    let msg = ref("hello");
    let p = reactive({
      name: "lili",
      age: 18,
      job: {
        serve: {
          salary: 20,
        },
      },
    });

    // 情况一：监视ref定义的一个响应数据的变化
    /*  watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    },{immediate:true}); */
    // immediate:true页面加载旧监视

    // 情况二：监视ref定义的多个响应数据的变化
    /* watch([count, msg], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    },{immediate:true}); */

    // 情况三：监视reactive定义的一个响应数据
    // 1. 此处无法正确获得oldVal
    // 2. 强制开启了深度监视（deep配置无效）
    /* watch(p, (newVal, oldVal) => {
      console.log("p对象变化了", newVal, oldVal);
    },{deep:false}); */ //此处的deep配置无效

    // 情况四：监视reactive定义的响应数据的一个属性
    /* watch(() => p.age, (newVal, oldVal) => {
      console.log("p对象的age属性变化了", newVal, oldVal);
    }); */

    // 情况五：监视reactive定义的响应数据的多个属性
    /* watch([() => p.age, () => p.name], (newVal, oldVal) => {
      console.log("p对象的age或name属性变化了", newVal, oldVal);
    }); */

    // 特殊情况
    watch(() => p.job, (newVal, oldVal) => {
      console.log("p对象的job属性变化了", newVal, oldVal);
    },{ deep: true }); // 由于监视的是reactive所定义的对象中的某个属性（对象），所以deep配置有效，无法正确获得oldVal

    return {
      count,
      msg,
      p,
    };
  },
};
</script>