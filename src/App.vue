<template>
  <div id="app">
    <div class="app-dashboard shrink">
      <div class="row expanded app-dashboard-top-nav-bar">
        <div class="small-text-left columns medium-2">
          <button data-toggle="app-dashboard-sidebar"
                  class="app-dashboard-logo-menu-icon menu-icon hide-for-large"></button>
          <router-link to="/" class="app-dashboard-logo">RGBot</router-link>
        </div>

        <div class="columns shrink app-dashboard-top-bar-actions">
          <ul class="dropdown menu" data-dropdown-menu>
            <li>
              <span v-if="isLogined" class="user-icon-logined">
                <i class="fas fa-user-circle fa-2x"></i>
              </span>
              <span v-else class="user-icon-common">
                <i class="fas fa-user-circle fa-2x"></i>
              </span>
              <ul class="menu">
                <li><a v-show="!isLogined" data-open="login-reveal">{{ $t('app.login') }}</a></li>
                <li><a v-show="!isLogined" data-open="register-reveal">{{ $t('app.register') }}</a></li>
                <li>
                  <router-link to="/user" v-show="isLogined">{{ user_name }}</router-link>
                </li>
                <li><a v-show="isLogined" data-open="change-password-reveal">{{ $t('app.change_password') }}</a></li>
                <li><a v-show="isLogined" @click="logout">{{ $t('app.logout') }}</a></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="app-dashboard-body off-canvas-wrapper">
        <div id="app-dashboard-sidebar"
             class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-large"
             data-off-canvas>
          <div class="app-dashboard-sidebar-inner">
            <ul class="multilevel-accordion-menu vertical menu accordion-menu" data-accordion-menu>
              <li class="is-single-submenu">
                <router-link to="/about">{{ $t('app.about') }}</router-link>
              </li>
              <li>
                <a href="#">Arcaea</a>
                <ul class="menu vertical sublevel-1">
                  <li>
                    <router-link to="/arcaea">{{ $t('app.instruction') }}</router-link>
                    <router-link to="/arcaea/account" v-if="isLogined">{{ $t('app.my_account') }}</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">BangDream</a>
                <ul class="menu vertical sublevel-1">
                  <li>
                    <router-link to="/bangdream">{{ $t('app.instruction') }}</router-link>
                    <router-link to="/bangdream/account" v-if="isLogined">{{ $t('app.my_account') }}</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">CGSS</a>
                <ul class="menu vertical sublevel-1">
                  <li>
                    <router-link to="/cgss">{{ $t('app.instruction') }}</router-link>
                    <router-link to="/cgss/account" v-if="isLogined">{{ $t('app.my_account') }}</router-link>
                  </li>
                </ul>
              </li>
              <li class="is-single-submenu">
                <router-link to="/help">{{ $t('app.help') }}</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="reveal-modal" id="login-reveal" data-animation-in="slide-in-down fast"
         data-animation-out="slide-out-up fast" data-reveal>
      <div class="reveal-modal-inner">
        <div class="user-reveal-form">
          <label for="login-username">{{ $t('app.username') }}</label>
          <input type="text" class="user-reveal-form-username" id="login-username" name="username">
          <label for="login-password">{{ $t('app.password') }}</label>
          <input type="password" class="user-reveal-form-password" id="login-password" name="password">
          <input type="checkbox" class="user-reveal-form-remember" id="login-remember" name="remember">
          <span class="user-reveal-form-remember">{{ $t('app.remember') }}</span>
          <button type="submit" class="user-reveal-form-button" @click="login">{{ $t('app.login') }}</button>
        </div>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="reveal-modal" id="register-reveal" data-animation-in="slide-in-down fast"
         data-animation-out="slide-out-up fast" data-reveal>
      <div class="reveal-modal-inner">
        <div class="user-reveal-form">
          <label for="register-username">{{ $t('app.username') }}</label>
          <input type="text" class="user-reveal-form-username" id="register-username" name="username">
          <label for="register-password">{{ $t('app.password') }}</label>
          <input type="password" class="user-reveal-form-password" id="register-password" name="password">
          <label for="register-password2">{{ $t('app.password2') }}</label>
          <input type="password" class="user-reveal-form-password" id="register-password2" name="password2">
          <button type="submit" class="user-reveal-form-button" @click="register">{{ $t('app.register') }}</button>
        </div>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="reveal-modal" id="change-password-reveal" data-animation-in="slide-in-down fast"
         data-animation-out="slide-out-up fast" data-reveal>
      <div class="reveal-modal-inner">
        <div class="user-reveal-form">
          <label for="change-password-password">{{ $t('app.new_password') }}</label>
          <input type="password" class="user-reveal-form-password" id="change-password-password" name="password">
          <label for="change-password-password2">{{ $t('app.password2') }}</label>
          <input type="password" class="user-reveal-form-password" id="change-password-password2" name="password2">
          <button type="submit" class="user-reveal-form-button" @click="change_password">{{ $t('app.change_password') }}</button>
        </div>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="callout alert small" data-closable="fade-out" id="callout-alert"></div>
    <div class="callout success small" data-closable="fade-out" id="callout-success"></div>


  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  var alertTimeout = null;
  var successTimeout = null;

  export default {
    methods: {
      ...mapActions(["setUser"]),
      showCallout(type, calloutStr) {
        if (type === 'alert') {
          $("#callout-alert").text(calloutStr);
          MotionUI.animateIn('#callout-alert', 'fade-in fast');
          if (alertTimeout) {
            clearTimeout(alertTimeout);
            alertTimeout = null;
          }
          alertTimeout = setTimeout(function () {
            $("#callout-alert").trigger('close');
          }, 2000);
        } else if (type === 'success') {
          $("#callout-success").text(calloutStr);
          MotionUI.animateIn('#callout-success', 'fade-in fast');
          if (successTimeout) {
            clearTimeout(successTimeout);
            successTimeout = null;
          }
          successTimeout = setTimeout(function () {
            $("#callout-success").trigger('close');
          }, 2000);
        }
      },
      login() {
        var username = $("#login-username").val();
        var password = $("#login-password").val();

        if (!username || !password) {
          this.showCallout('alert', this.$i18n.t("app.login_form_empty"));
        } else {
          const data = new FormData();
          data.append('username', username);
          data.append('password', password);

          NProgress.start();
          axios.post(this.$apihost + '/user/login/', data).then((response) => {
            if (response.data.errorcode === 0) {
              this.setUser(username);
              this.showCallout('success', this.$i18n.t("app.login_success"));
              $("#login-reveal").foundation('close');
            } else {
              this.showCallout('alert', this.$i18n.t(response.data.detail));
            }
            NProgress.done();
          }).catch(function (error) {
            console.log(error);
          });
        }
      },
      register() {
        var username = $("#register-username").val();
        var password = $("#register-password").val();
        var password2 = $("#register-password2").val();

        if (password !== password2) {
          this.showCallout('alert', this.$i18n.t('app.password_confirm_wrong'));
          return;
        }
        if (password.length > 20 || password.length < 8) {
          this.showCallout('alert', this.$i18n.t('app.password_type_error'));
          return;
        }
        if (username.length > 20 || username.length < 3) {
          this.showCallout('alert', this.$i18n.t('app.username_type_error'));
          return;
        }

        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        data.append('password2', password2);

        NProgress.start();
        axios.post(this.$apihost + '/user/register/', data).then((response) => {
          if (response.data.errorcode === 0) {
            this.setUser(username);
            this.showCallout('success', this.$i18n.t("app.register_success"));
            $("#register-reveal").foundation('close');
          } else {
            this.showCallout('alert', this.$i18n.t(response.data.detail));
          }
          NProgress.done();
        }).catch(function (error) {
          console.log(error);
        });
      },
      change_password() {
        var password = $("#change-password-password").val();
        var password2 = $("#change-password-password2").val();

        if (password !== password2) {
          this.showCallout('alert', this.$i18n.t('app.password_confirm_wrong'));
          return;
        }
        if (password.length > 20 || password.length < 8) {
          this.showCallout('alert', this.$i18n.t('app.password_type_error'));
          return;
        }

        const data = new FormData();
        data.append('password', password);
        data.append('password2', password2);

        NProgress.start();
        axios.post(this.$apihost + '/user/change/password/', data).then((response) => {
          if (response.data.errorcode === 0) {
            this.showCallout('success', this.$i18n.t("app.change_password_success"));
            $("#change-password-reveal").foundation('close');
          } else {
            this.showCallout('alert', this.$i18n.t(response.data.detail));
          }
          NProgress.done();
        }).catch(function (error) {
          console.log(error);
        });
      },
      logout() {
        NProgress.start();
        axios.post(this.$apihost + '/user/logout/').then((response) => {
          if (response.data.errorcode === 0) {
            this.setUser(null);
            this.showCallout('success', this.$i18n.t("app.logout_success"));
          } else {
            this.showCallout('alert', this.$i18n.t(response.data.detail));
          }
          NProgress.done();
        }).catch(function (error) {
          console.log(error);
        });
      },
      get_user_info() {
        if (localStorage.getItem('username')) {
          axios.post(this.$apihost + '/user/info/').then((response) => {
            if (response.data.errorcode === 0) {
              this.setUser(localStorage.getItem('username'));
            } else {
              this.setUser(null);
              this.login_invaild();
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      },
      login_invaild() {
        this.setUser(null);
        this.showCallout('alert', this.$i18n.t('app.login_invaild'));
      },
    },
    computed: {
      ...mapGetters(['isLogin', 'username']),
      isLogined() {
        if (localStorage.getItem('username')) {
          this.setUser(localStorage.getItem('username'));
        } else {
          this.setUser(null);
        }
        return this.isLogin;
      },
      user_name() {
        if (localStorage.getItem('username')) {
          return localStorage.getItem('username');
        } else if (this.username) {
          return this.username;
        } else {
          return this.$i18n.t('change_local_data_warning');
        }
      }
    },
    mounted: function () {
      this.get_user_info();
    }
  }
</script>

<style>

</style>
