<template>
  <div class="clan-section-wrapper">
    <div class="clan-section">
      <div class="clan-section-header">
        <div class="clan-section-header-left">
          <img src="@/assets/43138.png" width="256" height="144">
        </div>
        <div class="clan-section-header-right">
          <div class="clan-name">
            クラン名
            <span>Nabd</span>
          </div>
          <div class="clan-master">
            クランマスター
            <span>Hikaru</span>
          </div>
          <div class="clan-member">
            クラン会員数
            <span>16/50</span>
          </div>
        </div>
      </div>
      <div class="clan-section-body">
        <div class="clan-introduction">
          <h3>クラン紹介</h3>
          <textarea cols="48" rows="10" readonly>週3活動できる人
          </textarea>
        </div>
        <div class="membership-application">
          <button @click="isComponentModalActive = true">加入申請する</button>
        </div>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus>
            <MemberShipApplicationModal />
        </b-modal>
      </div>
    </div>
  </div>
  
</template>

<script>
import MemberShipApplicationModal from '~/components/Clan/MemberShipApplicationModal';

export default {
  layout: 'private',
  middleware: 'auth',

  data () {
    return {
      isComponentModalActive: false,
    }
  },
  components: {
    MemberShipApplicationModal,
  }
}
</script>

<style lang="scss" scoped>
  .clan-section-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
  .clan-section-header {
    display: flex;
    .clan-section-header-left {
      .clan-name {
        display: flex;
        justify-content: center;
        font-size: 20px;
        color: #fff;
        p, h3 {
          font-weight: bold;
        }
      }
    }
    .clan-section-header-right {
      font-size: 20px;
      margin-top: 30px;
      margin-left: 15px;
      color: #fff;
      .clan-name {
        font-weight: bold;
        margin-bottom: 10px;
        span {
          margin-left: 72px;
        }
      }
      .clan-master {
        font-weight: bold;
        margin-bottom: 10px;
        span {
          margin-left: 12px;
        }
      }
      .clan-member {
        font-weight: bold;
        span {
          margin-left: 30px;
        }
      }
    }
  }
  .clan-section-body {
    margin-top: 25px;
    margin-left: 20px;
    .clan-introduction {
      font-size: 22px;
      color: #fff;
      h3 {
        font-weight: bold;
      }
      textarea {
        font-size: 16px;
        font-weight: bold;
        border-color: #dbdbdb;
        border-radius: 4px;
        outline: 0;
        resize: none;
        color: #2f3136;
      }
    }
    .membership-application {
      text-align: center;
      margin-top: 20px;
      button {
        font-family: Whitney,Hiragino Sans,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,Osaka,MS PGothic,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: bold;
        margin: 0 auto;
        padding: 8px 30px;
        border-radius: 7px;
        color: #fff;
        border-color: #7289da;
        background-color: #7289da;
        cursor: pointer;
        outline: 0;
      }
    }
  }

</style>