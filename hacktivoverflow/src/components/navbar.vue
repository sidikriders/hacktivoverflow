<template>
  <div style='width: 100%; background-color: white; position: fixed; top: -2px; z-index: 5000; right: 0px;'>
    <nav class='nav container' style='max-width: 1000px'>
      <div class='nav-left'>
        <a class='nav-item'>
            <img src='http://i.imgur.com/Uwgjmc5.png' alt='HacktivOverflow logo'>
          </a>
      </div>
      <p class='nav-item'>Already have an account? </p>
      <div class='nav-item'>
        <div class='field is-grouped'>
          <p class='control'>
            <a class='button is-warning' v-on:click='showlogin'>
              Sign In
            </a>
          </p>
          <div v-bind:class='modalClass' id='login-modal'>
            <div class='modal-background' v-on:click='closeModal'></div>
            <div class='modal-content' style='width: 30%;'>
              <div class='box' style='text-align: left;'>
                <label class='label'>Username</label>
                <p class='control has-icons-left'>
                  <input class='input' v-model='loginData.username' type='text' placeholder='username'>
                  <span class='icon is-small is-left'>
                    <i class='fa fa-user'></i>
                  </span>
                </p><br>
                <label class='label'>Password</label>
                <p class='control has-icons-left'>
                  <input class='input' v-model='loginData.password' type='password' placeholder='password'>
                  <span class='icon is-small is-left'>
                    <i class='fa fa-key'></i>
                  </span>
                </p><br>
                <div style='text-align:right'>
                  <a class='button is-warning' @click='loginManual'>
                      <span>Log In</span>
                    </a>

                </div>
              </div>
            </div>
            <button class='modal-close' v-on:click='closeModal'></button>
          </div>

        </div>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      modalClass: 'modal',
      loginData: {
        username: '',
        password: ''
      },
      isLogin: false
    }
  },
  methods: {
    showlogin() {
      this.modalClass = 'modal is-active'
    },
    closeModal() {
      this.modalClass = 'modal'
    },
    loginManual() {
      let self = this
      axios.post('http://localhost:3000/signin', {
        username: self.loginData.username,
        password: self.loginData.password
      })
      .then(function(response) {
        if (response.data == 'username tersebut tidak ditemukan') {
          alert(response.data)
        // } else {
        } else if (response.data == 'passwod salah') {
          alert(response.data)
        }
      })
      .catch(function(error) {
        alert(error)
      })
    }
  }
}
</script>
