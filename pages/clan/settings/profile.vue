<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li><nuxt-link to="/clan/settings/member">メンバー管理</nuxt-link></li>
        <li><nuxt-link to="/clan/settings/membershipApplication">加入申請管理</nuxt-link></li>
        <li class="is-active"><nuxt-link to="/clan/settings/profile">クラン情報管理</nuxt-link></li>
      </ul>
    </div>
    <div class="flex-input-box">
      <div class="flex-child-1">
        <div class="clan-icon-uploader">
          <div class="clan-icon-uploader-inner">
            <div class="clan-icon-uploader-inner-hint">アイコンを変更</div>
              <input @change="onFileChange" id="clan-icon" type="file" accept=".jpg,.jpeg,.png,.gif" style="cursor: pointer;">
          </div>
          <a v-show="uploadedImage" class="remove-btn" @click="remove">削除する</a>
        </div>
      </div>
      <div class="flex-child-2">
        <div class="clan-name-input">
          <label>クラン名</label>
          <input type="text" placeholder="クラン名を入力してください。" required>
        </div>
        <div class="clan-introduction-input">
          <label>クラン紹介文</label>
          <textarea cols="15" rows="8"></textarea>
        </div>
      </div>
    </div>
    <div class="save-button">
      <button>保存する</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'private',
  middleware: 'auth',

  data() {
    return {
      uploadedImage: '',
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let el = document.getElementsByClassName('clan-icon-uploader-inner')[0];
      const reader = new FileReader();
      reader.onloadend = e => {
        el.style.backgroundImage = 'url("' + reader.result + '")';
        this.uploadedImage = e.target.result;
      }

      if (file) {
          reader.readAsDataURL(file);
      }
    },
    remove() {
      let uploader_inner = document.getElementsByClassName('clan-icon-uploader-inner')[0];
      uploader_inner.style.backgroundImage = 'url("")';
      let clan_icon = document.getElementById('clan-icon');
      clan_icon.value = '';
      this.uploadedImage = false;
    },
  },
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
  .modal-title {
    font-size: 18px;
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
    justify-content: center;
    margin-top: 70px;
    .flex-child-1 {
      .clan-icon-uploader {
        display: flex;
        flex-direction: column;
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
          color: #fff;
          z-index: 2;
          :hover {
            color: #fff;
          }
        }
      }
    }
    .flex-child-2 {
      width: 30%;
      margin-left: 50px;
      .clan-name-input {
        display: flex;
        flex-direction: column;
        width: 225px;
        label {
          font-size: 16px;
          font-weight: bold;
          color: #87909c;
        }
        input {
          font-size: 16px;
          font-weight: bold;
          width: 100%;
          padding: 10px 4px 10px 4px;
          margin-top: 12px;
          margin-bottom: 10px;
          outline: 0;
          border-radius: 4px;
          border-bottom-color: #f0f0f0;
          border-width: 0 0 2px;
        }
      }
      .clan-introduction-input {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        label {
          font-size: 16px;
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
  }
  .save-button {
    margin-top: 40px;
    justify-content: center;
    display: flex;
    button {
      font-family: Whitney,Hiragino Sans,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,Osaka,MS PGothic,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: bold;
      margin: 0 auto;
      padding: 7px 50px;
      border-radius: 7px;
      color: #fff;
      border-color: #7289da;
      background-color: #7289da;
      cursor: pointer;
    }
  }
</style>