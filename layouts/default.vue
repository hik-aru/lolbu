<template>
  <div class="main-wrapper">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
import Header from '~/components/Header'

export default {
  
  data () {
    return {
       user: {},
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user ? user : {})
      let user_storage = localStorage.getItem('vuex')
      // console.log(user);
      // const ref_message = firebase.database().ref('message')
      // if (user) {
      //   this.chat = []
      //   // message に変更があったときのハンドラを登録
      //   ref_message.limitToLast(10).on('child_added', this.childAdded)
      // } else {
      //   // message に変更があったときのハンドラを解除
      //   ref_message.limitToLast(10).off('child_added', this.childAdded)
      // }
    })
  },

  methods : {
    ...mapActions(['setUser']),
  },
  
  components: {
    Header
  },
}

</script>

<style lang="scss" scoped>
.main-wrapper {
  background-color: #26262A;
  min-height: 800px;
}
</style>