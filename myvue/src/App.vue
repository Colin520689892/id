<template>
  <div>
    <!-- <h1>{{ message }}</h1> -->
    <log-view></log-view>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // 如果需要在模板中使用 message 数据，请在此处定义
      // message: 'Hello, world!'
    };
  },
  methods: {
    // 在此处定义组件的方法
  }
};
</script>

<style>
/* 在此处编写组件的样式 */
</style>
