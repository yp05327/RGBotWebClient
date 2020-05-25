// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/app.css'

import i18n from './lang/index'
import store from './store/index'

Vue.prototype.$apihost = "http://127.0.0.1:8080/api"

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});
router.afterEach(transition => {
  NProgress.done();
});
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted: function () {
    $(document).foundation();
  }
})

