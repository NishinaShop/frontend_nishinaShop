<template>
  <div class="col-xl-3 col-lg-4 mb-5">
    <div class="customer-sidebar card border-0">
      <div class="customer-profile">
        <a class="d-inline-block" href="#"
          ><img
            class="img-fluid rounded-circle customer-image shadow"
            src="https://res.cloudinary.com/dqitdaxd8/image/upload/profile-default-icon-2048x2045-u3j7s5nj_dwojf2.png"
            alt=""
        /></a>
        <h5>Usuario</h5>
        <p class="text-muted text-sm mb-0"></p>
      </div>
      <nav class="customer-nav">
        <router-link
          class=" list-group-item d-flex justify-content-between align-items-center text-decoration-none"
          to="/cuenta/ordenes"
          ><span>
            <svg class="svg-icon svg-icon-heavy me-2">
              <use xlink:href="#paper-bag-1"></use></svg
            >Ordenes</span
          >
          <div class="badge rounded-pill bg-light text-dark fw-normal px-3">
            {{ n_ordenes }}
          </div></router-link
        ><a
          class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
          href="customer-account.html"
          ><span>
            <svg class="svg-icon svg-icon-heavy me-2">
              <use xlink:href="#male-user-1"></use></svg
            >Perfil</span
          ></a
        ><router-link
          class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
            to="/cuenta/direcciones" active-class="active"
          ><span>
            <svg class="svg-icon svg-icon-heavy me-2">
              <use xlink:href="#navigation-map-1"></use></svg
            >Direcciones</span
          ></router-link
        ><a
          class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
          @click="logout()"
          ><span>
            <svg class="svg-icon svg-icon-heavy me-2">
              <use xlink:href="#exit-1"></use></svg
            >Cerrar sessión</span
          ></a
        >
      </nav>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "sideBarClienteApp",
  data(){
    return{
      n_ordenes : 0,
    }
  },
  beforeMount(){
  this.count_ordenes()
  },
    methods:{
      logout(){
      this.$store.dispatch("logout");
      if(this.$router.path !== '/') this.$router.push({ name: "home" });
     this.$socket.emit('send_cart',true)
    },
    count_ordenes(){
      axios.get(this.$url+'/listar_ordenes_admin',{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
      }).then((result)=>{
        this.n_ordenes = result.data.ordenes.length 
      })
    }  
    }
};
</script>
