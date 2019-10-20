<template>
  <form action="">
    <div class="modal-card">
      <section class="modal-card-body">
        <h5 class="modal-title">クラン加入申請</h5>
        <div class="flex-input-box">
          <div class="flex-child-1">
            <div class="clan-introduction-input">
              <label>申請メッセージ</label>
              <textarea cols="25" rows="8"></textarea>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="modal-card-foot">
        <button class="create-button" @click="onFileChange">新規作成</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // uploadedImage: '',
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
    width: 310px;
  }
  .modal-card-body {
    padding: 28px 40px 0;
    border-radius: 5px 5px 0 0;
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
          label {
            font-size: 17px;
            font-weight: bold;
            color: #87909c;
          }
          
        }
        .clan-introduction-input {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          margin-bottom: 10px;
          label {
            font-size: 14px;
            font-weight: bold;
            color: #87909c;
          }
          textarea {
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            border-color: #dbdbdb;
            border-radius: 4px;
            outline: 0;
            resize: none;
            color: #2f3136;
          }
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
  }
</style>