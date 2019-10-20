<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/clan/search" class="navbar-item">
          クラン検索
        </nuxt-link>
        <nuxt-link to="/clan/settings/member" class="navbar-item">
          クラン管理
        </nuxt-link>
        <nuxt-link to="/timeline" class="navbar-item">
          タイムライン
        </nuxt-link>
        <nuxt-link to="/user/edit" class="navbar-item">
          プロフィール
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary" @click="logout">
                <span class="icon">
                  <i class="fa fa-sign-out"></i>
                </span>
                <span>logout</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  nav {
    padding: 5px 10px;
    background-color: #26262A;
    .navbar-start {
      font-size: 22px;
      margin: 0 auto;
    }
    .navbar-end {
      margin-left: 0;
    }
  }
  .navbar-item {
    color: white;
    font-weight: bold;
  }
</style>