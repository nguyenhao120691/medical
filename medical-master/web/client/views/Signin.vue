<template>
  <div class="signwrapper">
    <waiter />
    <div class="sign-overlay"></div>
    <div class="signpanel"></div>

    <div class="panel signin">
      <div class="panel-heading">
        <h1>Medical MS</h1>
        <h4 class="panel-title">Xin chào! mời bạn đăng nhập.</h4>
      </div>
      <div class="panel-body">
        <button class="btn btn-primary btn-quirk btn-fb btn-block">Đăng nhập thông qua Facebook</button>
        <div class="or">or</div>
        <signin-form />
        <hr class="invisible">
        <div class="form-group">
          <a href="signup.html" class="btn btn-default btn-quirk btn-stroke btn-stroke-thin btn-block btn-sign">đăng ký tài khoản mới</a>
        </div>
      </div>
    </div>
    <!-- panel -->
  </div>
</template>

<script>
  import SigninForm from '../components/SigninForm'
  import Waiter from '../components/Waiter'

  export default {
    beforeCreate(){
      if(this.$store && this.$store.auth && this.$store.auth.logged){
        this.$router.replace('/')
      }
    },
    components: {
      SigninForm,
      Waiter
    }
  }

</script>
