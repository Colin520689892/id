<template>
    <div>
        <el-container style="height: 900px; border: 1px solid #eee">
        <el-header style="font-size:40px;background-color: rgb(238, 241, 246)"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></el-header>
        <el-container>
            <el-aside width="230px" style="background-color: rgb(238, 241, 246);border:1px">
                <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>我的小网站</template>
                    <el-menu-item index="1-1">
                        <router-link to="/emp">我最喜欢的照片</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/shi">诗歌</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link to="/zi">自我介绍</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                        <router-link to="/ri">日历</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-5">
                        <router-link to="/log">退出</router-link>
                    </el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- a -->
                <!-- 日历 -->
                <el-calendar v-model="value">
                </el-calendar>

            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>


<style>

</style>