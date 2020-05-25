<template>
  <div class="bangdream-account">
    <div id="account-id"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      get_account_info() {
        if (localStorage.getItem('username')) {
          axios.post(this.$apihost + '/bangdream/account/').then((response) => {
            if (response.data.errorcode === 0) {
              $('#account-id').text(response.data.data.accountId);
            } else if (response.data.errorcode === 100) {
              this.$parent.login_invaild();
            } else if (response.data.errorcode >= 200 && response.data.errorcode < 300) {
              this.$parent.showCallout('alert', this.$i18n.t(response.data.detail));
              this.$router.push('/help');
            } else {
              this.$parent.showCallout('alert', this.$i18n.t(response.data.detail));
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    },
    mounted: function () {
      this.get_account_info();
    }
  }
</script>
