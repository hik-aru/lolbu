<template>
  <div class="side">
    
  </div>
  
</template>

<script>
import Card from '~/components/Card'
// import { SidebarMenu } from 'vue-sidebar-menu'


export default {
  layout: 'private',
  middleware: 'auth',

  components: {
    Card,
  }
}
</script>
