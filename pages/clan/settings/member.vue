<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><nuxt-link to="/clan/settings/member">メンバー管理</nuxt-link></li>
        <li><nuxt-link to="/clan/settings/membershipApplication">加入申請管理</nuxt-link></li>
        <li><nuxt-link to="/clan/settings/profile">クラン情報管理</nuxt-link></li>
      </ul>
    </div>
    <div class="member-management-wrapper">
      <table class="member-management">
        <tr class="table-header">
          <th class="role">役職</th>
          <th class="rank">ランク</th>
          <th class="name">名前</th>
        </tr>
        <tr class="table-body">
          <td>マスター</td>
          <td>チャレンジャー</td>
          <td>iceChocolate</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
        <tr class="table-body">
          <td>メンバー</td>
          <td>ダイアモンドI</td>
          <td>rekless</td>
        </tr>
      </table>
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
  .member-management-wrapper {
    display: flex;
    justify-content: center;
    .member-management {
      margin: 40px 10px 0px 10px;
      .table-header {
        font-size: 24px;
        border-bottom-color: #8E91AF;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        th {
          font-weight: bold;
          color: #fff;
        }
      }
      .table-body {
        font-size: 22px;
        cursor: pointer;
        &:hover {
          background-color: #3A3C41;
        }
        td {
          padding-top: 10px;
          padding-right: 25px;
          font-weight: bold;
          color: #B7B3B2;
        }
      }
    }
  }
</style>