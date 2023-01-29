# vue2发展到vue3的改变

## 全局API的转移Vue.xxx  --->  app.xxx

## 过度类名的更改
   vue2： .v-enter  .v-leave-to
   vue3:  .v-enter-from   .v-leave-to

## 移除keyCode作为v-on的修饰符

## 移除.native修饰符
   vue3中自定义组件的自定义事件的使用：
   1. 父组件中绑定事件: v-on:close="handleFun"
   2. 子组件中声明自定义事件： emits:["close"]

## 移除过滤器fillter