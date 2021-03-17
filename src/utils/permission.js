import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route } from 'vue-router';
import { UserModule } from '@/store/modules/user';

NProgress.configure({ showSpinner: false });

const whiteList = ['/404', '/401', '/login'];
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else if (!UserModule.tenantName) {
    try {
      await UserModule.SET_BASE_INFO();
      next({ ...to, replace: true });
    } catch (err) {
      NProgress.done();
    }
  } else {
    next();
  }
});

router.afterEach((to) => {
  NProgress.done();
});
