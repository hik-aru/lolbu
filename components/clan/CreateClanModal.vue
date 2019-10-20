<template>
  <form>
    <div class="modal-card">
      <section class="modal-card-body">
        <h5 class="modal-title">クラン設立</h5>
        <p class="modal-description">
          クランを作ることで、一緒にLoLを楽しむ固定メンバーを集めたり、クラン戦を募集することが出来るようになります。
        </p>
        <div class="flex-input-box">
          <div class="flex-child-1">
            <div class="clan-name-input">
              <label>クラン名</label>
              <input v-model="clan_name" type="text" placeholder="クラン名を入力してください。" required>
            </div>
            <div class="clan-introduction-input">
              <label>クラン紹介文</label>
              <textarea v-model="clan_introduction" cols="15" rows="8"></textarea>
            </div>
          </div>
          <div class="flex-child-2">
            <div class="clan-icon-uploader">
              <div class="clan-icon-uploader-inner">
                <div class="clan-icon-uploader-inner-hint">アイコンを変更</div>
                  <input @change="onFileChange" id="clan-icon" type="file" accept=".jpg,.jpeg,.png,.gif" style="cursor: pointer;">
              </div>
              <a v-show="uploadedImage" class="remove-btn" @click="remove">削除する</a>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="modal-card-foot">
        <button @click="submit" class="submit-button">新規作成</button>
      </footer>
    </div>
  </form>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      clan_name: '',
      clan_introduction: '',
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
    submit() {
      var clan;
      let postData = {
        clan_name: this.clan_name,
        clan_introduction: this.clan_introduction
      };

      firebase.database().ref('/clans/')
        .orderByChild('clan_name').startAt(this.clan_name).endAt(this.clan_name)
        .once('value', (snapshot) => {
          if(snapshot.val()) {
            console.log(snapshot.val());
          } else {
            console.log('fail');
          }
        });
        
      // console.log(this.clanName);
      // let newClanId = firebase.database().ref().child('clans').push().key;
      // let updates = {};
      // updates['/clans/' + newClanId] = postData;
      // firebase.database().ref().update(updates);
      // firebase.database().ref('/clan_names/').set({
      //   name: this.clan_name
      // });
      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      console.log('aa');
      this.$parent.close();
    }
  },
}
</script>

<style lang="scss" scoped>
  .modal-card-body {
    padding: 28px 40px 0;
    border-radius: 5px 5px 0px 0px;
    :hover {
      border-radius: 5px 5px 0px 0px;
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
      margin-top: 18px;
      .flex-child-1 {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        .clan-name-input {
          display: flex;
          flex-direction: column;
          width: 225px;
          label {
            font-size: 14px;
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
    .submit-button {
      font-family: Whitney,Hiragino Sans,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,Osaka,MS PGothic,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: bold;
      margin: 0 auto;
      padding: 5px 20px;
      border-radius: 7px;
      color: #fff;
      border-color: #7289da;
      background-color: #7289da;
      cursor: pointer;
      &:hover {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
        transform: translateY(-0.1875em);
      }
    }
  }
</style>