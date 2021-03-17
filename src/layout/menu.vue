<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-api" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <div class="menu-title">
            <span v-if="!isCollapse">API管理</span>
            <el-button :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" type="text" @click="isCollapse = !isCollapse"></el-button>
        </div>
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  components: {
  },
  data() {
        return {
        isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        }
    }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-api:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.menu-title {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    height: 56px;
    line-height: 36px;
    border-bottom: 1px solid #888;
    .el-button {
        float: right;
        padding: 0;
        margin-top: 5px;
        margin-right: 8px;
        font-size: 25px;
        color: #666;
    }
}
</style>
