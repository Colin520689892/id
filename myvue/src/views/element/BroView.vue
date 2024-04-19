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
                <!-- 我珍藏的照片 -->
                <el-card class="box-card" >
                <div slot="header" class="clearfix" >
                    <span>自我介绍</span>
                    <el-button style="float: right; padding: 3px 0" type="text"><div class="block">
                    <span class="demonstration">给我打分</span>
                    <el-rate v-model="value1"></el-rate>
                    </div></el-button>
                </div>
                <div>
                    <el-descriptions class="margin-top" title="带边框列表" :column="3" :size="size" border>
                        <template slot="extra">
                        <el-button type="primary" size="small"></el-button>
                        </template>
                        <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            姓名
                        </template>
                        邱智文
                        </el-descriptions-item>
                        <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号
                        </template>
                        13425078847
                        </el-descriptions-item>
                        <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-location-outline"></i>
                            居住地
                        </template>
                        广东珠海
                        </el-descriptions-item>
                        <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-tickets"></i>
                            备注
                        </template>
                        <el-tag size="small">广东东软学院</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-office-building"></i>
                            联系地址
                        </template>
                        加我微信
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
                </el-card>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    position: absolute;
      top: 50%;
      left: 57%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    width: 700px;
    height: 600px;
  }
  
</style>
