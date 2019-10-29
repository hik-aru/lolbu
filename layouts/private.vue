<template>
  <div class="top-wrapper">
    <SideMenu />
    <div class="main-wrapper">
      <PrivateHeader />
      <nuxt />
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
import Header from '~/components/Header'
import PrivateHeader from '~/components/PrivateHeader'
import SideMenu from '~/components/SideMenu'

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
      this.loginCheck(user);
      
      // let user_storage = localStorage.getItem('vuex')
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
    });

    this.init();
  },

  methods : {
    ...mapActions(['setUser']),

    loginCheck(user) {
      const db_user = firebase.database().ref('users/' + user.uid);
      
      db_user.on('value', (snapshot) => {
        const data = snapshot.val();

        // 初回ログインならfirestoreに保存
        if(!data) {
          firebase.database().ref('users/' + user.uid).set({
            display_name: user.displayName,
            email: user.email
          });
          console.log('user resgisterd');
        }

        this.setUser(user ? user : {});
      });
    },

    init() {
      console.log(this.$store.state.user);
      // let clan_data = firebase.database().ref('/clans/')
      //   .orderByChild('user_id').startAt(this.$store.state.user.uid).endAt(this.$store.state.user.uid)
      //   .once('value', (snapshot) => { console.log(snapshot.val())})

      // console.log(clan_data);
    }
  },
  
  components: {
    PrivateHeader,
    SideMenu
  },
}

</script>

<style lang="scss" scoped>
  .top-wrapper {
    display: flex;
    background-color: #2F3135;
    min-height: 800px;
  }
  .main-wrapper {
    width: 100%;
  }
</style>