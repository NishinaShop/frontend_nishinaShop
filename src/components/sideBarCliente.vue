<template>
  <div class="col-xl-3 col-lg-4 mb-5">
    <div class="customer-sidebar card border-0">
      <div class="customer-profile">
        <a class="d-inline-block" href="#"
          ><img
            class="img-fluid rounded-circle customer-image shadow"
            src="/public/img/avatar-1.png"
            alt=""
        /></a>
        <h5>Usuario</h5>
        <p class="text-muted text-sm mb-0"></p>
      </div>
      <nav class="customer-nav">
        <a
          class=" list-group-item d-flex justify-content-between align-items-center text-decoration-none"
          ><span>
            <svg class="svg-icon svg-icon-heavy me-2">
              <use xlink:href="#paper-bag-1"></use></svg
            >Ordenes</span
          >
          <div class="badge rounded-pill bg-light text-dark fw-normal px-3">
            {{ n_ordenes }}
          </div></a
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
          href="customer-login.html"
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
export default {
  name: "sideBarClienteApp",
  data(){
    return{
      n_ordenes : 0,
    }
  }
};
</script>
