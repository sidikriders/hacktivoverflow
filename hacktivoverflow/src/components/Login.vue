<template>
<div style="background: #e5e5e5">
  <div class="container" style="padding-left: 77px;">

    <div class='columns' style='max-width: 1000px;'>
      <div class='column is-two-thirds'>
        <div class='contentnya-ini' style='padding-top: 35px'>

          <div class='content-text' style='width: 80%; text-align: justify'>
            <h2 class='title is-2'>Hacktiv Overflow</h2>
            <h6 class='subtitle is-6'>adalah sebuah platform forum yang di adopsi dari stackoverflow, hacktivOverflow sangat menyenangkan untuk mengisi waktu luang bersama keluarga dan teman-teman</h6>
          </div>

          <div class='animasi-logo' style='position: relative; left: 41px; top: 101px; width: 40%;'>
            <img class='animasi satu' src='http://i.imgur.com/Uwgjmc5.png' alt='fox-and-text' style='width: 30vw; position: absolute;'>
          </div>
        </div>
      </div>
      <div class='column' style="text-align: left; margin-left: -3rem;">
        <br>
        <h1 class='title is-3'>Daftar</h1>
        <h3 class='subtitle is-5'>Gratis. Selama masih berlaku</h3>

        <div class='field'>
          <label class='label'>Name</label>
          <p class='control has-icons-left'>
            <input v-model='signUpData.name' class='input' type='text' placeholder='name'>
            <span class='icon is-small is-left'>
                <i class='fa fa-address-book'></i>
              </span>
          </p><br>

          <label class='label'>Username</label>
          <p class='control has-icons-left'>
            <input v-model='signUpData.username' class='input' type='text' placeholder='username'>
            <span class='icon is-small is-left'>
                <i class='fa fa-user'></i>
              </span>
          </p><br>

          <label class='label'>Password</label>
          <p class='control has-icons-left'>
            <input v-model='signUpData.password' class='input' type='password' placeholder='password'>
            <span class='icon is-small is-left'>
                <i class='fa fa-key'></i>
              </span>
          </p><br>

          <label class='label'>Email</label>
          <p class='control has-icons-left'>
            <input v-model='signUpData.email' class='input' type='email' placeholder='email'>
            <span class='icon is-small is-left'>
                <i class='fa fa-envelope'></i>
              </span>
          </p><br>

          <span class='control'>
                <a class='button is-warning' v-on:click='signUpBaru'>
                  <span>Sign Up</span>
          </a>
          </span>
          <span style='top: 6px; position: relative; left: 21px;'>
                <span>Or</span>
          </span>
          <div class='is-grouped' style='position: relative; left: 150px; bottom: 34px;'>
            <span class='control'>
              <a class='button is-primary is-outlined' onclick='alert(`mohon maaf, untuk saat ini login melalui Twiiter masih dalam tahap pengembangan
                \nWe are sorry, but at the moment login via twitter is still under development
                \n죄송 합니다만, 트위터를 통한 로그인은 아직 개발 단계에 있습니다.`)'>
              <span>Sign in </span>
            <span class='icon'>
               <i class='fa fa-twitter'></i>
              </span>
            </a>
            </span>

            <span class='control'>
              <a class='button is-info is-outlined' onclick='alert(`mohon maaf, untuk saat ini login melalui Facebook masih dalam tahap pengembangan
                \nWe are sorry, but at the moment login via facebook is still under development
                \n죄송합니다. 현재 페이스 북을 통한 로그인은 아직 개발 중입니다.`)'>
                    <span>Sign in </span>
            <span class='icon'>
                      <i class='fa fa-facebook'></i>
                    </span>
            </a>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->

  <div style='width: 100%; margin-top:2rem; padding-top:1rem; padding-bottom:1rem; background: white;'>
    <div class='content has-text-centered'>
      <p>
        <strong>HacktivOverflow ver. SR</strong> by <a href='http://www.dafont.com/dk-hexenhammer.font?text=Sidik+Aldi+Zulfikar+Shabrina' target='_blank'>Sidikriders</a>. The source code is not licensed . The website content is also not licensed.
      </p>
      <p>
        <a class='icon is-warning' href='https://github.com/ingelieur/hacktiv-feud' target='_blank'>
            <i class='fa fa-github'></i>
          </a>
      </p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: ['user', 'isLogin'],
  data() {
    return {
      modalClass: 'modal',
      loginData: {
        username: '',
        password: ''
      },
      signUpData: {
        username: '',
        password: '',
        name: '',
        email: ''
      }
    }
  },
  methods: {
    signUpBaru() {
      let self = this
      axios.post('http://localhost:3000/signup', {
      newUsername: self.signUpData.username,
      newPass: self.signUpData.password,
      newFullname: self.signUpData.name,
      newEmail: self.signUpData.email
      })
      .then(function(response) {
        console.log(response);
        self.signUpData.username = ''
        self.signUpData.password = ''
        self.signUpData.name = ''
        self.signUpData.email = ''

      })
      .catch(function(err) {
        console.log(err);
      })
    }
  }
};
</script>
<!-- <script type='text/javascript' src='../fbLogin'></script> -->

<style>
@keyframes kedipKedip {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

.satu {
  animation-name: kedipKedip;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
