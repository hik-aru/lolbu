<template>
  <div class="page-wrapper">
    <div class="page">
      <h2 class="title">LOL部で新しいクランを探す</h2>
      <div class="search-section">
        <div class="search-box-input">
          <input type="text" autocomplete="off" placeholder="クラン名を検索してみてください">
          <div class="search-icon">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <section class="clan-list-wrapper">
        <h3 class="section-title">人気のクランリスト</h3>
        <div class="clan-list">
          <div class="clan-card">
            <div class="card-header">
              <img src="@/assets/43138.png" width="256" height="144">
            </div>
            <div class="card-info">
              <div class="card-title">
                <span>Nabd</span>
              </div>
              <div class="card-text">
                <span>週4ログイン / 社会人 / まったり勢</span>
              </div>
              <div class="member-info">
                <div class="dot-icon"></div>
                <div class="member-number">55人が所属</div>
              </div>
            </div>
          </div>
          <div class="clan-card">
            <div class="card-header">
              <img src="@/assets/43138.png" width="256" height="144">
            </div>
            <div class="card-info">
              <div class="card-title">
                <span>Nabd</span>
              </div>
              <div class="card-text">
                <span>週4ログイン / 社会人 / まったり勢</span>
              </div>
              <div class="member-info">
                <div class="dot-icon"></div>
                <div class="member-number">55人が所属</div>
              </div>
            </div>
          </div>
          <div class="clan-card">
            <div class="card-header">
              <img src="@/assets/43138.png" width="256" height="144">
            </div>
            <div class="card-info">
              <div class="card-title">
                <span>Nabd</span>
              </div>
              <div class="card-text">
                <span>週4ログイン / 社会人 / まったり勢</span>
              </div>
              <div class="member-info">
                <div class="dot-icon"></div>
                <div class="member-number">55人が所属</div>
              </div>
            </div>
          </div>
          <div class="clan-card">
            <div class="card-header">
              <img src="@/assets/43138.png" width="256" height="144">
            </div>
            <div class="card-info">
              <div class="card-title">
                <span>Nabd</span>
              </div>
              <div class="card-text">
                <span>週4ログイン / 社会人 / まったり勢</span>
              </div>
              <div class="member-info">
                <div class="dot-icon"></div>
                <div class="member-number">55人が所属</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script>
export default {
  layout: 'private',
  middleware: 'auth',
}
</script>

<style lang="scss" scoped>
  .page-wrapper {
    overflow: scroll;
    height: 100vh;
    background-color: #35393E;
  }
  .page {
    width: 800px;
    padding-top: 85px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
  .title {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
  }
  .search-section {
    display: flex;
    justify-content: center;
    .search-box-input {
      display: flex;
      background-color: #4f545c;
      border-radius: 5px;
      margin-bottom: 80px;
      input {
        font-family: Whitney,Hiragino Sans,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,Osaka,MS PGothic,Helvetica Neue,Helvetica,Arial,sans-serif;
        color: #DCDDDE;
        border: none;
        outline: 0;
        font-size: 18px;
        font-weight: 500;
        padding: 12px;
        background: transparent;
        height: auto;
        width: 35rem;
      }
      .search-icon {
        color: hsla(0,0%,100%,.3);
        i {
          margin-top: 10px;
          margin-right: 10px;
          font-size: 30px;
        }
      }
    }
  }
  .clan-list-wrapper {
    .section-title {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 16px;
    }
  }
  .clan-list {
    display: flex;
    flex-wrap: wrap;
    .clan-card {
      border-radius: 6px;
      max-width: 30%;
      margin: 0 5px 16px;
      background: #202225;
      .card-header {
        width: 240px;
        height: 144px;
      }
      .card-info {
        padding: 0px 16px 16px;
        .card-title {
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
        }
        .card-text {
          color: #b9bbbe;
          margin: 8px 0 16px;
          font-size: 14px;
        }
        .member-info {
          display: flex;
          justify-content: center;
          font-size: 14px;
          .dot-icon {
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            margin-top: 5px;
            background-color: #43b581;
          }
          .member-number {
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>