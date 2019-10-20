<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><nuxt-link to="/timeline">全て</nuxt-link></li>
        <li><nuxt-link to="/timeline/member">メンバー募集</nuxt-link></li>
        <li><nuxt-link to="/timeline/clanMatch">クラン戦募集</nuxt-link></li>
      </ul>
    </div>
    <div class="timeline-container-wrapper">
      <hr class="top-horizon"></hr>
      <div class="timeline-container">
        <div class="timeline-content">
          <div class="content-header">
            <div class="avater-wrapper">
              <img src="@/assets/43138.png" class="avater"></img>
            </div>
            <h2 class="avater-name">
              <span>Hikaru</span>
              <time>今日 21:52</time>
            </h2>
          </div>
          <div class="content-body">
            <h2 class="post-text">クラン「Nabd」のメンバーを募集します。週３活動できて、rankダイアモンド以上の方ぜひ応募してください。</h2>
          </div>
        </div>
        <hr class="bottom-horizon"></hr>
      </div>
      <div class="timeline-container">
        <div class="timeline-content">
          <div class="content-header">
            <div class="avater-wrapper">
              <img src="@/assets/43138.png" class="avater"></img>
            </div>
            <h2 class="avater-name">
              <span>Hikaru</span>
              <time>今日 21:52</time>
            </h2>
          </div>
          <div class="content-body">
            <h2 class="post-text">クラン「Nabd」のメンバーを募集します。週３活動できて、rankダイアモンド以上の方ぜひ応募してください。</h2>
          </div>
        </div>
        <hr class="bottom-horizon"></hr>
      </div>
      <div class="timeline-container">
        <div class="timeline-content">
          <div class="content-header">
            <div class="avater-wrapper">
              <img src="@/assets/43138.png" class="avater"></img>
            </div>
            <h2 class="avater-name">
              <span>Hikaru</span>
              <time>今日 21:52</time>
            </h2>
          </div>
          <div class="content-body">
            <h2 class="post-text">クラン「Nabd」のメンバーを募集します。週３活動できて、rankダイアモンド以上の方ぜひ応募してください。</h2>
          </div>
        </div>
        <hr class="bottom-horizon"></hr>
      </div>
    </div>
    <form class="send-message">
      <div class="textarea-wrapper">
        <textarea v-bind:style="{ height: textareaHeight + 'px' }" name="" rows="1" placeholder="Ctrl+Enterでメッセージを送信" @input="insertLine" @keyup.ctrl.enter="submit"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'private',
  middleware: 'auth',

  data() {
    return {
      textareaHeight: 40
    }
  },
  methods: {
    submit(e) {
      e.target.value = '';
      this.textareaHeight = 40;
    },
    insertLine(e) {
      let lines = (e.target.value + '\n').match(/\n/g).length;
      this.textareaHeight = 20 * lines;
      console.log(this.textareaHeight);

      if(this.textareaHeight == 20) {
        this.textareaHeight = 40;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .tabs {
    margin: 10px 10px;
    li {
      a {
        color: #fff;
        font-weight: bold;
      }
      a:hover {
        color: #00D1B2;
        border-color: #00D1B2;
      }
    }
    li.is-active {
      a {
        color: #00D1B2;
        border-color: #00D1B2;
      }
    }
  }
  .top-horizon {
    margin: 20px 40px 10px;
    background-color: #414549;
  }
  .timeline-container {
    padding: 20px 20px;
    .timeline-content {
      .content-header {
        display: flex;
        height: 1.375rem;
        .avater-wrapper {
          position: relative;
          top: 2px;
          margin-right: 20px;
          margin-left: 20px;
          margin-bottom: 20px;
          opacity: 1;
          .avater {
            width: 60px;
            height: 60px;
          }
        }
        .avater-name {
          color: #fff;
          font-weight: bold;
          time {
            font-size: 0.75rem;
            font-weight: 500;
            margin-left: .3rem;
            color: #72767D;
          }
        }
      }
      .content-body {
        margin-top: 3px;
        margin-left: 100px;
        padding-right: 10px;
        .post-text {
          font-size: 1rem;
          font-weight: bold;
          line-height: 1.375;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #DCDDDE;
        }
      }
    }
    .bottom-horizon {
      margin: 20px 20px 0px;
      background-color: #414549;
    }
  }
  .send-message {
    margin-left: 40px;
    margin-right: 40px;
    .textarea-wrapper {
      border-radius: 8px;
      background-color: #40444B;
      textarea {
        width: 100%;
        max-height: 160px;
        font-size: 1rem;
        font-weight: bold;
        line-height: 18px;
        padding: 10px;
        margin-bottom: -5px;
        outline: 0;
        background-color: transparent;
        resize: none;
        border: none;
        color: #fff;
      }
    }
  }
</style>