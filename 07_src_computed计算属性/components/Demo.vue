<template>
  姓：<input type="text" v-model="p.firstName" /><br /><br />
  名：<input type="text" v-model="p.lastName" /><br /><br />
  <h3>全名：{{ p.fullName }}</h3>
  全名：<input type="text" v-model="p.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    let p = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 计算属性简写，没有考虑计算属性被修改的情况
    /* p.fullName = computed(() => {
      return p.firstName + "-" + p.lastName;
    }); */

    //计算属性完整写法，考虑了计算属性被修改的情况
    p.fullName = computed({
      get() {
        return p.firstName + "-" + p.lastName;
      },
      set(value) {
        var arr = value.split("-");
        p.firstName = arr[0];
        p.lastName = arr[1];
      },
    });

    return {
      p,
    };
  },
};
</script>