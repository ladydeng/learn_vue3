<template>
  <input type="text" v-model="msg" />
  <h3>输入框的值为：{{ msg }}</h3>
</template>

<script>
import { customRef } from "vue";

export default {
  name: "App",
  setup() {
    // 自定义ref响应,返回customRef容器
    function myRef(value, delay) {
      let timer;
      // customRef()要求传入一个回调函数
      return customRef((track, trigger) => {
        // 回调函数里要求返回一个对象
        return {
          get() {
            console.log("有人获取了myRef");
            track(); //通知vue追踪value变化
            return value;
          },
          set(newVal) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              console.log("有人修改了myRef为：", newVal);
              value = newVal;
              trigger(); // 通知vue重新解析模板
            }, delay);
          },
        };
      });
    }

    let msg = myRef("hello", 500);

    return { msg };
  },
};
</script>
