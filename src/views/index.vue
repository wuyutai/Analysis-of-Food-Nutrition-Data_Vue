<template>
  <el-container style="height: 100%">
    <el-header style="background-color:#006666">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#006666"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div style="display: flex">
          <router-link :to="index" replace>
            <el-menu-item>首页</el-menu-item>
          </router-link>
          <router-link :to="food_contrast" replace>
            <el-menu-item>食物对比</el-menu-item>
          </router-link>
          <router-link :to="food_power" replace>
            <el-menu-item>营养速查</el-menu-item>
          </router-link>
        </div>
      </el-menu>
    </el-header>
    <el-container>
      <el-main style="background-color: #009966">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "left",
      activeIndex: "1",
      index: { path: "/search_food" },
      food_contrast: { path: "/food_contrast" },
      food_power: { path: "/food_power" }
    };
  }
};
</script>
<style lang="stylus" scoped>
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.router-link-active { // 点击时去掉下划线
  text-decoration: none;
}

a {
  text-decoration: none; // 去掉原有链接文字下划线
}

.el-menu-demo {
  height: 40px;
  float: left;
}

.el-menu-item:hover {
  font-size: 26px;
  border-radius: 12px;
}

/* 导航栏的间距等样式 */
.el-menu-item {
  padding: 0 22px;
  font-size: 22px;
  height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 150px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside, .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>