<template>
  <div class="home">
    <NavBar />
    <div class="m15">
      <Menu class="api-menu"/>
      <div class="api-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/layout/menu.vue'
import NavBar from '@/layout/navbar.vue'
export default {
  name: 'Home',
  components: {
    Menu,
    NavBar
  },
  mounted() {
    this.$store.dispatch('user/set_user_info', '15955473019');
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.home {
  .m15 {
    display: flex;
    margin: 15px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .api-menu {
    margin-right: 10px;
    min-height: 450px;
  }
  .api-content {
    width: 100%;
    min-height: 450px;
    background-color: #fff;
  }
}
</style>
