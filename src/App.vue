<template>  
  <div id="app"> 
    <topHeader />
  </div>
  <main class="main-content">
      <router-view />
    </main>
  <bottomFooter />
</template>
<script>
import topHeader from '@/components/topHeader.vue'
import bottomFooter from '@/components/footer.vue'
export default {
  components:{
    topHeader,
    bottomFooter
  }
}
</script>
<style>
.main-content {
  flex: 1 !important; /* El router-view ocupa el espacio disponible */
  padding-bottom : 1rem !important;
   }   /* Espacio para el contenido */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
router-view {
  flex: 1;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
