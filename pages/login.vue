<template>
  <section>
    <div class="contents-wrapper">
      <div class="top-content">
        <div>
          <h1>ボッチでプレイする時代は終わりを告げた...！</h1>
          <p>必要機能が全て詰まった、ゲーマー向け音声テキストチャットアプリ。安全！無料！パソコン携帯両方から気軽に楽しめる。 面倒なTeamSpeakやSkypeとはさよならして、サクッと楽しめるDiscordに乗り換えよう。</p>
        </div>
        <div class="social-login">
          <div class="twitter-login">
            <a class="button is-info is-rounded" @click="twitterLogin">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Twitterでログイン</span>
            </a>
          </div>
          <div class="google-login">
            <a class="button is-danger is-rounded" @click="googleLogin">
              <span class="icon">
                <i class="fab fa-google"></i>
              </span>
              <span>Googleでログイン</span>
            </a>
          </div>
        </div>
      </div>
      <img src="@/assets/43138sub.png" />
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  mounted() {
    console.log(this);
  },
  methods: {
    twitterLogin() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
        this.$router.push('/')
      });
    },

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithPopup(provider).then(function(result) {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   var token = result.credential.accessToken;
      //   // The signed-in user info.
      //   var user = result.user;
      // }
      firebase.auth().signInWithPopup(provider).then(() => {
        this.$router.push('/')
      });;
    },
  }
}
</script>

<style lang="scss" scoped>
  section {
    margin-top: 50px;
  }
  .contents-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      margin: 0 auto;
      max-width: 800px;
    }
  }
  .top-content {
    margin: 0 auto;
  }
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
  }
  p {
    color: hsla(0,0%,100%,.6);
    margin: 12px 15px 30px 15px;
    max-width: 710px;
  }
  .social-login {
    display: flex;
    justify-content: center;
  }
  .twitter-login {
    a {
      padding-top: 7px;
      padding-bottom: 7px;
      margin-right: 30px;
      height: 45px;
      width: 260px;
    }
  }
  .google-login {
    a {
      background-color: #DC4437;
      padding-top: 7px;
      padding-bottom: 7px;
      margin-left: 30px;
      height: 45px;
      width: 260px;
    }
  }
</style>