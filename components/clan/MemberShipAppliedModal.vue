<template>
  <form action="">
    <div class="modal-card">
      <div class="modal-card-head">
        <h5 class="modal-card-head-title">加入申し込み</h5>
      </div>
      <div class="modal-card-body">
        <div class="flex-input-box">
          <div class="flex-child-1">
            <div class="applicant-name">
              <label>申込者</label>
              <h3>Faker</h3>
            </div>
            <div class="rank">
              <label>ランク</label>
              <h3>チャレンジャー</h3>
            </div>
            <div class="lane">
              <label>メインレーン</label>
              <h3>Support</h3>
            </div>
            <textarea cols="28" rows="7" readonly>加入させて頂きたいです！よろしくお願いします！</textarea>
          </div>
        </div>
      </div>
      
      <footer class="modal-card-foot">
        <button class="create-button" type="button" @click="onFileChange">承認</button>
        <button class="close-button" type="button" @click="$parent.close()">拒否</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: '',
    }
  },
  methods: {
    onFileChange(e) {
      console.log(e);
    },
  },
}
</script>

<style lang="scss" scoped>
  .modal-card {
    width: 340px;
  }
  .modal-card-head {
    background-color: #fff;
    padding: 12px;
    .modal-card-head-title {
      font-weight: bold;
      color: #7289da;
    }
  }
  .modal-card-body {
    padding: 15px 0px 0px 30px;
    .modal-title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: #7289da;
    }
    .modal-description {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
      color: #99aab5;
    }
    .flex-input-box {
      display: flex;
      margin-top: 5px;
      .flex-child-1 {
        .applicant-name {
          display: flex;
          color: #87909c;
          label {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
          }
          h3 {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
            margin-left: 75px;
          }
        }
        .rank {
          display: flex;
          color: #87909c;
          label {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
          }
          h3 {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
            margin-left: 75px;
          }
        }
        .lane {
          display: flex;
          color: #87909c;
          label {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
          }
          h3 {
            font-size: 18px;
            font-weight: bold;
            color: #2f3136;
            margin-left: 21px;
          }
        }
        textarea {
          margin-top: 10px;
          padding: 5px;
          font-size: 16px;
          font-weight: bold;
          border-color: #dbdbdb;
          border-radius: 4px;
          outline: 0;
          resize: none;
          color: #2f3136;
        }
      }
      .flex-child-2 {
        margin: 0 auto;
        .clan-icon-uploader {
          .clan-icon-uploader-inner {
            display: inline-block;
            width: 138px;
            height: 138px;
            border-radius: 50%;
            margin-bottom: 10px;
            background-color: #7289da;
            input {
              position: relative;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
            }
            .clan-icon-uploader-inner-hint {
              position: relative;
              top: 60px;
              font-weight: bold;
              font-size: 13px;
              text-align: center;
              color: #fff;
            }
          }
          .remove-btn {
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
  }
  .modal-card-foot {
    border: 0;
    background-color: #F6F6F7;
    button {
      font-family: Whitney,Hiragino Sans,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,Osaka,MS PGothic,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: bold;
      padding: 5px 20px;
      margin: 0 auto;
      border-radius: 7px;
      color: #fff;
      border-color: #7289da;
      background-color: #7289da;
      cursor: pointer;
      outline: 0;
      &:hover {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
        transform: translateY(-0.1875em);
      }
    }
    .close-button {
      border-color: #ff3860;
      background-color: #ff3860;
    }
  }
</style>