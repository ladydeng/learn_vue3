<template>
  <button @click="isShow = !isShow">点击切换弹窗</button>
  <!-- 传送门 to="#app" -->
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h3>弹窗标题</h3>
        <div>
          <p>弹窗内容</p>
          <p>弹窗内容</p>
          <p>弹窗内容</p>
          <p>弹窗内容</p>
        </div>
        <div>
          <button @click="isShow = false">取消</button>&nbsp;&nbsp;<button
            @click="isShow = false"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);

    return { isShow };
  },
};
</script>

<style scoped>
.mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
}

.dialog {
  width: 300px;
  height: 300px;
  background: lightseagreen;

  text-align: center;
  position: absolute;
  /* 页面居中 */
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>