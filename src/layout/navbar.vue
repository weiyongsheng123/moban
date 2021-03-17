<template>
    <header>
        <router-link to="/">
            <img height="30px" src="@/assets/imgs/logo.png" />
        </router-link>
        <span class="diliver">|</span>
        <span class="title">API管理</span>
        <el-dropdown class="user-dropdown">
            <span class="el-dropdown-link">
              帅哥<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="lang-dropdown-menu">
                <el-dropdown-item command="zh" @click.native="logout">修改密码</el-dropdown-item>
                <el-dropdown-item command="zh" @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  data() {
        return {
        
        };
  },
    methods: {
        logout() {

        }
    }
};
</script>

<style lang="scss" scoped>
header {
    height: 54px;
    padding: 0 30px;
    border-bottom: 1px solid #E6E6E6;
    text-align: left;
    vertical-align: middle;
    background: #fff;
    img {
        display: inline-block;
    }
    a {
        display: inline-block;
        margin: 10px auto;
        vertical-align: middle;
    }
    .diliver {
        margin: 0 8px;
        font-size: 20px;
    }
    .title {
        font-size: 18px;
    }
    .user-dropdown {
        float: right;
        padding: 5px 15px;
        margin: 11px;
        border: 1px solid #D9D9D9;
        border-radius: 15px;
        background-color: #F8F9F9;

    }
}
</style>
