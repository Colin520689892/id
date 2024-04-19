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
                <el-col :span="10">
                    <el-card shadow="hover" style="width: 50%;" id="el1">
                    <div slot="header" class="clearfix">
                        <span>文嘉《明日歌》</span>
                        <el-button
                        style="float: right; padding: 3px 0"
                        type="text"
                        @click="clickFn"
                        >暂停</el-button
                        >
                    </div>
                    <div style="font-size: 18px;text-align: center; margin-top: 35px;">
                        明日复明日
                    </div>
                    <div style="font-size: 18px;text-align: center;">明日何其多</div>
                    <div style="font-size: 18px;text-align: center;">我生待明日</div>
                    <div style="font-size: 18px;text-align: center;">万事成蹉跎</div>
                    <div style="margin-top: 35px;"></div>
                    <el-statistic
                        ref="statistic"
                        @finish="hilarity"
                        format="HH:mm:ss"
                        :value="deadline4"
                        title="距离明日："
                        time-indices
                    >
                    </el-statistic>
                    </el-card>
                </el-col>
                <!-- 日历 -->
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deadline2: Date.now() + 1000 * 60 * 60 * 8,
            deadline3: Date.now() + 1000 * 60 * 30,
            deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
            deadline5: new Date("2023-05-06"),
            stop: true,
        };
        },
        methods: {
        hilarity() {
            this.$notify({
            title: "提示",
            message: "时间已到",
            duration: 0,
            });
        },
        clickFn() {
            this.$refs.statistic.suspend(this.stop);
            this.stop = !this.stop;
        },
        add() {
            this.deadline3 = this.deadline3 + 1000 * 10;
        },
        },
    };
</script>

<style>
#el1{
    position: absolute;
      top: 50%;
      left: 57%;
    transform: translate(-50%, -50%);
    color:aqua;
    font-size: 30px;
}
</style>