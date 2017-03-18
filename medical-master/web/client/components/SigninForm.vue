<template>
  <vue-form :state="formstate" @submit.prevent="doSignin">
    <alert v-if="error" type="warning" class="contrast">
      <strong>{{ error.message }}</strong> <span>{{ error.desc }}</span>
    </alert>
    <div class="form-group mb10">
      <validate tag="email" name="email">
        <div :class="{'input-group ': true,  'input-group--warning ': invalidTouchedEmail}">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input type="email" name="email" class="form-control" placeholder="Nhập email" v-model="email" required />
        </div>
        <form-error field="email" error="required" show="$touched">
          <div class="form-text text-muted text-muted--warning">đây là trường bắt buộc</div>
        </form-error>
        <form-error field="email" error="email" show="$dirty">
          <div class="form-text text-muted text-muted--warning">Email phải đúng định dạng abc@xyz.com</div>
        </form-error>
      </validate>
    </div>

    <div class="form-group nomargin">
      <validate tag="password">
        <div :class="{'input-group ': true,  'input-group--warning ': invalidTouchedPassword}">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          <input type="password" name="password" class="form-control" placeholder="nhập mật khẩu" v-model="password" required minlength="6" maxlength="24" @blur="checkEmailExist">
        </div>
        <form-error field="password" error="required" show="$touched">
          <div class="form-text text-muted text-muted--warning">đây là trường bắt buộc</div>
        </form-error>
        <div v-if="invalidDirtyPassword" class="form-text text-muted text-muted--warning">Mật khẩu phải có độ dài 6 - 24 ký tự</div>
      </validate>
    </div>

    <div><a href="" class="forgot">Quyên mật khẩu?</a></div>
    <div class="form-group">
      <button type="submit" :class="{'btn btn-success btn-quirk btn-block': true, 'disabled': !enabled}">Đăng Nhập</button>
    </div>
  </vue-form>
</template>

<script>
  import Alert from './Alert'

  export default {
    data: () => ({
      error: false,
      formstate: {},
      email: '',
      password: '',
      valid: true,
      enabled: true
    }),
    computed: {
      invalidTouchedEmail(){
            return this.formstate.email && this.formstate.email.$invalid && this.formstate.email.$touched 
      },
      invalidDirtyEmail() {
        return this.formstate.email && this.formstate.email.$invalid && this.formstate.email.$dirty 
      },
      invalidTouchedPassword(){
         return this.formstate.password && this.formstate.password.$invalid && this.formstate.password.$touched 
      },
      invalidDirtyPassword() {
        return this.formstate.password && this.formstate.password.$invalid && this.formstate.password.$dirty 
      },
      invalidPassword(){
        return this.formstate.password && this.formstate.password.$invalid
      }
    },
    methods: {
      doSignin() {
        if( !this.enabled ) return;
        if ( this.formstate.$valid )  {
            this.enabled = false
            const {email, password} = this
            this.$store.dispatch('auth/callSignin', {email, password});
        } else {
            this.formstate.email.$touched = true
            this.formstate.password.$touched = true 
        }
      },
      checkEmailExist(){
        if(!this.enabled) return;

      },
      onSigninStart(){
        const {commit, dispatch} = this.$store;
        
        dispatch('waiter/start')
        this.enabled = false
        this.error = false
      },
      onSigninSuccess({payload:{ user }}){
        const {commit, dispatch} = this.$store;

        this.$router.push('/')
        dispatch('waiter/fill')
        this.enabled = true
        dispatch('gritter/success', {
          title: 'Đăng nhập thành công',
          text: `xin chào <strong>${user.email}</strong>.`
        })
      },
      onSigninFaile({payload}){
        const {commit, dispatch} = this.$store;
        const {message, desc} = payload
    
        this.error = {message, desc};
        this.enabled = true
        dispatch('waiter/cancel')
      }
    },
    mounted(){
      const handlers = {
        'auth/SIGNIN_START': this.onSigninStart,
        'auth/SIGNIN': this.onSigninSuccess,
        'auth/SIGNIN_FAILE': this.onSigninFaile
      }

      this.subscription = this.$store.subscribe((mutation, state) => {
        const handler = handlers[mutation.type]
        return handler?handler(mutation, state):false
      })
    },
    destroyed(){
    },
    components: {
      Alert
    }

  }

</script>
