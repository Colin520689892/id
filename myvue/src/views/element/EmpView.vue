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
                <template>
                <el-carousel :interval="4000" type="card" height="350px" id="er1">
                    <el-carousel-item v-for="(url, index) in imageUrls" :key="index">
                        <img :src="url" alt="Image" style="width: 100%;">
                    </el-carousel-item>
                </el-carousel>
                </template>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrls: [
        'https://ts4.cn.mm.bing.net/th?id=OIP-C.VB0xXeSxHnngvLhPNczzCwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'https://ts3.cn.mm.bing.net/th?id=OIP-C.OY9JErRSYMyiTrPsmzfnEQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'https://ts4.cn.mm.bing.net/th?id=OIP-C.GC_ugX-TzPVR26SSxI1kZwHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'https://ts2.cn.mm.bing.net/th?id=OIP-C.nxfpnWUpdsl3kqG_KZUYAAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      ]
    };
  }
};
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
#er1{

}
</style>
