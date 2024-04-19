<template>
    <div id="div">
      <img src="@/assets/th.jpg" id="img1">
      <form id="fm1">
        <br>
        <label for="username">账号(1234)&nbsp;&nbsp;</label>
        <input type="text" id="username" name="username" v-model="username"><br>
        <label for="password">密码(1234)&nbsp;&nbsp;</label>
        <input type="text" id="password" name="password" v-model="password"><br>
        <br>
        <el-button type="success" id="eb1" @click="check">登录</el-button>
        <el-alert
          :title="message"
          :type="info"
          effect="dark"
          v-show="info !== ''" id="ea1"
          @close="info = ''">
        </el-alert>
      </form>
    </div>
  </template>
  
  <style>
    /* 设置背景图 */
  
    #div{
      color:aquamarine;
      font-size: 30px;
      font-style: italic;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1024px;
      height: 650px;
      background-image: url('@/assets/log.png');
      background-size: cover; /* 图片填充整个div */
      background-position: center; /* 图片居中 */
    }
    #img1{
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      width:50px
    }
    #fm1{
      position: absolute;
      top: 35%;
      left: 47%;
      transform: translate(-50%, -50%);
    }
    input[type="text"] {
      width: 200px; /* 设置输入框宽度为300像素 */
      height: 25px;
      padding: 5px; /* 设置内边距 */
    }
    #eb1{
      position: absolute;
      top: 100%;
      left: 57%;
      transform: translate(-50%, -50%);
    }
    #ea1{
      position: absolute;
      top: 130%;
      left: 20%;
    }
    
  </style>
  <script>


  export default {
    data() {
      return {
        username: '', // 用户名
        password: '',  // 密码
        info:'',
        message:''
      };
    },
    methods: {
      check() {
        if (this.username === '1234' && this.password === '1234') {
          // 用户名和密码均为 "1234"
          console.log('登录成功');
          // 在这里可以添加登录成功后的操作
          this.info = 'success';
          this.message="登录成功";
          this.$router.push({ path: '/emp' });

          
        } else {
          // 用户名或密码错误
          console.log('用户名或密码错误');
          this.username='';
          this.password='';
          this.info = 'error';
          this.message='账号或密码错误';
          // 在这里可以添加登录失败后的操作
        }
      }
    }
  }
  </script>