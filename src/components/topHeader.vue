<template>
  <div>
    <section id="hero" class="top-header">
      <div class="container">
        <div class="space-between-block">
          <div class="w-layout-hflex horizontal-left-center-35px-gap">
            <div class="w-layout-hflex icon-list-10px-gap">
              <img
                src="https://res.cloudinary.com/dqitdaxd8/image/upload/b_rgb:08080800/v1747041299/images_sqt2il.png"
                
                loading="lazy"
                alt=""
                class="image-24px"
              />
              <p class="_14px-text-white">
                Envios gratis en compras mayores a $899
              </p>
            </div>
            <div class="w-layout-hflex icon-list-10px-gap">
              <img
                src="https://res.cloudinary.com/dqitdaxd8/image/upload/v1747041463/images_pdh4io.png"
                loading="lazy"
                alt=""
                class="image-24px"
              />
              <a class="_14px-text-white" href="https://wa.me/524428804068">
                Hacer pedido via whats'app
              </a>
            </div>
            
          </div>
          <div class="social-container" >
            <div class="horizontal-left-center-10px-gap hide-in-tablet ">
            <a
              href="https://www.facebook.com/Nishina.mx/"
              target="_blank"
              class="social-icon-navbar w-inline-block"
            >
              <img
                src="../assets/img/66bf1affbc25c2a233add783_Frame.svg"
                loading="lazy"
                alt=""
                class="_16px-image"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="social-icon-navbar w-inline-block"
            >
              <img
                src="../assets/img/66bf1affb8d2ed54148f31c9_Frame (1).svg"
                loading="lazy"
                alt=""
                class="_16px-image"
              />
            </a>
            <a
              href="https://www.instagram.com/nishina_mx/"
              target="_blank"
              class="social-icon-navbar w-inline-block"
            >
              <img
                src="../assets/img/66bf1affe7f986070197a33d_Frame (2).svg"
                loading="lazy"
                alt=""
                class="_16px-image"
              />
            </a>
            <a
              href="https://www.tiktok.com/@nishina_mx"
              target="_blank"
              class="social-icon-navbar w-inline-block"
            >
              <img
                src="../assets/img/66bf1aff088665226d183130_Frame (3).svg"
                loading="lazy"
                alt=""
                class="_16px-image"
              />
            </a>
          </div>
            </div>
        </div>
      </div>
    </section>
    <div
      data-animation="default"
      class="navbar w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="6999f335-005a-f68f-bf29-0723f291d072"
      role="banner"
      data-duration="400"
      id="navbar"
    >
      <nav class="container">
        <div class="navbar-wrapper ">
          <router-link            
            aria-current="page"
            class="site-logo-wrapper-in-tablet w-nav-brand w--current ms-0"
            aria-label="Inicio"
            to="/"
          >
            <img
              src="../assets/img/nishina-logo.png"
              loading="lazy"
              style="width:100px !important;"
              alt=""
              class="site-logo"
            />
          </router-link>
          <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
            <div class="nav-middle-wrapper">
              <ul role="list" class="nav-menu w-list-unstyled">
                <li
                  data-w-id="4ef02e47-0ea5-5857-a6ac-bbd1e53c8b90"
                  class="nav-list"
                >
                  <router-link class="nav-link " to="/"
                    >Inicio</router-link
                  >
                </li>
                <li class="nav-list">
                  <router-link class="nav-link" to="/catalogo">
                    Catalogo
                  </router-link>
                </li>
                <li class="nav-list-for-dropdown">
                  <div class="nav-icon-and-text-wrapper">
                    <router-link class="nav-link"  to="/">Temporada</router-link>
                  </div>
                </li>
              </ul>
              <router-link
                to="/"
                aria-current="page"
                class="site-logo-wrapper-hide-in-mobile w--current"
                aria-label="home"
              >
                <img
                  src="../assets/img/nishina-logo.png"
                  loading="lazy"
                  style="width: 200px !important;"
                  class="img-fluid-logo"
                />
            </router-link>
              <ul role="list" class="nav-menu w-list-unstyled">
                <li
                  data-w-id="dc0d01a4-7c09-7606-9f50-dd1e1319b401"
                  class="nav-list"
                >
                  <div class="nav-icon-and-text-wrapper">
                    <router-link class="nav-link" @click="cerrarMenu()" to="/">Nosotros</router-link>
                  </div>
                </li>
                <li
                  data-w-id="dc0d01a4-7c09-7606-9f50-dd1e1319b435"
                  class="nav-list"
                >
                  <div class="nav-icon-and-text-wrapper">
                    <router-link class="nav-link" @click="cerrarMenu()" to="/">Contacto</router-link>
                  </div>
                </li>
                <li
                  data-w-id="d573f299-6765-7c8a-59e7-139abc7be21c"
                  class="nav-list"
                >
                  <div class="nav-icon-and-text-wrapper">
                    <router-link class="nav-link" @click="cerrarMenu()" to="/">Mayoristas</router-link>
                  </div>
                </li>
              </ul>
              <div class="show-in-tablet">
                <div class="horizontal-left-center-10px-gap">
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    class="social-icon-navbar w-inline-block"
                  >
                    <img
                      src="../assets/img/66bf1affbc25c2a233add783_Frame.svg"
                      loading="lazy"
                      alt=""
                      class="_16px-image"
                    />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    class="social-icon-navbar w-inline-block"
                  >
                    <img
                      src="../assets/img/66bf1affb8d2ed54148f31c9_Frame (1).svg"
                      loading="lazy"
                      alt=""
                      class="_16px-image"
                    />
                  </a>
                  <a
                    href="https://pinterest.com/"
                    target="_blank"
                    class="social-icon-navbar w-inline-block"
                  >
                    <img
                      src="../assets/img/66bf1affe7f986070197a33d_Frame (2).svg"
                      loading="lazy"
                      alt=""
                      class="_16px-image"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="social-icon-navbar w-inline-block"
                  >
                    <img
                      src="../assets/img/66bf1aff088665226d183130_Frame (3).svg"
                      loading="lazy"
                      alt=""
                      class="_16px-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div class="nav-icons">
            <!-- Search 
          <div class="search-icon-wrapper">
              <img
                src="../assets/img/66bf2b44bcf606ad88fddad8_Search.svg"
                loading="lazy"
                data-w-id="cd8ab261-2094-66af-a8c2-ba1d646cb0ca"
                alt=""
                class="image-24px-icon"
              />
              <div
                data-w-id="8ddcb4bf-6bc4-b62c-c129-29ad15f847d7"
                class="popup-search-bar"
                style="
                  transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                  display: none;
                  opacity: 0;
                "
              >
                <form
                  action="https://trendy-tnc.webflow.io/search"
                  class="search-input w-form"
                >
                  <input
                    class="form-input-field w-input"
                    maxlength="256"
                    name="query"
                    placeholder="Search…"
                    type="search"
                    id="search"
                    required=""
                  />
                  <input
                    type="submit"
                    class="search-icon-button w-button"
                    value="search"
                  />
                </form>
              </div>
            </div> -->
            <div class="nav-item dropdown"><router-link class="navbar-icon-link d-lg-none" to="/detalles_carrito"> 
              <img src="https://res.cloudinary.com/dqitdaxd8/image/upload/263142_ul8rwt.png" alt="Carrito de compras"class="image-24px">
              <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none"></span><div class="navbar-icon-link-badge">{{ count_cart }}                       </div></router-link>
                <div class="d-none d-lg-block"><router-link class="navbar-icon-link" id="cartdetails"  to="/detalles_carrito" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="https://res.cloudinary.com/dqitdaxd8/image/upload/263142_ul8rwt.png" alt="Carrito de compras" class="img-icon-head">
                    <div class="navbar-icon-link-badge">{{ count_cart }}                       </div></router-link>
                  <div class="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4" aria-labelledby="cartdetails">
                    <div class="navbar-cart-product-wrapper">
                      <!-- cart item-->
                       <div class="navbar-cart-product" v-for="item in carrito" v-if="count_cart >= 1"> 
                        <div class="d-flex align-items-center"><a><img class="img-fluid navbar-cart-product-image" :src="item.producto.portada" alt="..."></a>
                          <div class="w-100"><a class="navbar-cart-product-close"><i class="fa fa-times"></i></a>
                            <div class="ps-3"> <router-link class="navbar-cart-product-link" :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}">{{item.producto.nombre}}</router-link> 
                              <small class="d-block text-muted">{{item.variedad.color+'-'+item.variedad.talla}}</small>
                              <small class="d-block text-muted">Cantidad: {{item.cantidad}} </small>
                              <strong class="d-block text-sm text-end">{{convertCurrency(item.producto.precio * item.cantidad)}} </strong></div>
                          </div>
                        </div>
                      </div>
                       <div class="align-items-center"  v-if="count_cart == 0"> 
                        <div class="text-center">Carrito vacio</div>
                      </div>
                    </div>
                    <!-- total price-->
                    <div class="navbar-cart-total"><span class="text-uppercase text-muted">Tota:</span><strong class="text-uppercase">{{ convertCurrency(total) }}</strong></div>
                    <!-- buttons-->
                    <div class="d-flex justify-content-between"><router-link class="btn btn-link text-dark me-3" to="/detalles_carrito">Ver carrito<i class="fa-arrow-right fa"></i></router-link><router-link class="btn btn-outline-dark" :to="{name: 'pago_carrito'}">Checkout</router-link></div>
                  </div>
                </div>
              </div>
            <router-link
              class="w-inline-block"
              to="/login"
              v-if="!$store.state.token"
            >
              <img
                src="../assets/img/66bf2b432404d408024dcb53_Frame.svg"
                loading="lazy"
                alt=""
                class="image-24px"
              />
              <small class="w-inline-block d-none d-sm-inline">Ingresar</small>
            </router-link>
            <div class="dropdown w-inline-block d-none d-lg-inline" v-if="$store.state.token">
              <!-- Trigger del dropdown -->
              <a
                class="w-inline-block dropdown-toggle"
                href="#"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <img
                  src="../assets/img/66bf2b432404d408024dcb53_Frame.svg"
                  loading="lazy"
                  alt=""
                  class="image-24px"
                />
                <small class="">&nbsp; {{ user.nombre.split(" ")[0] }}</small>
              </a>

              <!-- Menú desplegable -->
              <ul class="dropdown-menu dropdown-menu-animated" aria-labelledby="userDropdown">
                <li>
                  <router-link class="dropdown-item btn" to="/cuenta/ordenes"><b>Ordenes</b></router-link>
                </li>
                <li>
                  <router-link class="dropdown-item btn" to="/cuenta/direcciones"><b>Direcciones</b></router-link>
                </li>
                <li>
                  <a class="dropdown-item btn" @click="logout()"><b>Cerrar sesión</b></a> 
                </li>
              </ul>
            </div>
            <div class="dropdown d-lg-none " v-if="$store.state.token">
              <!-- Trigger del dropdown -->
              <a
                class="w-inline-block dropdown-toggle"
                href="#"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <img
                  src="../assets/img/66bf2b432404d408024dcb53_Frame.svg"
                  loading="lazy"
                  alt=""
                  class="image-24px"
                />
                <small class="">&nbsp; {{ user.nombre.split(" ")[0] }}</small>
              </a>
              <!-- Menú desplegable -->
              <ul class="dropdown-menu dropdown-menu-animated" aria-labelledby="userDropdown">
                <li>
                  <router-link class="dropdown-item btn" to="/cuenta/ordenes"><b>Ordenes</b></router-link>
                </li>
                <li>
                  <router-link class="dropdown-item btn" to="/cuenta/direcciones"><b>Direcciones</b></router-link>
                </li>
                <li>
                  <a class="dropdown-item btn" @click="logout()"><b>Cerrar sesión</b></a>
                </li>
              </ul>
            </div>
              
          <button class="navbar-toggler  d-lg-none dropdown ms-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars">
            </i>
          </button>
          <!-- Navbar Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            
            <ul class="navbar-nav  dropdown-menu-movil ">
              
              <li class="nav-item-movil ms-2"><router-link class="nav-link" @click="cerrarMenu()" to="/">Inicio</router-link>
              </li>
              <li class="nav-item-movil ms-2"><router-link class="nav-link"  @click="cerrarMenu()" to="/catalogo">Catalogo</router-link>
              </li>
              <!-- Megamenu-->
              <li class="nav-item-movil ms-2"><router-link class="nav-link" @click="cerrarMenu()" to="/">Temporada</router-link>
              </li>
              <!-- /Megamenu end-->
              <!-- Multi level dropdown    -->
              <li class="nav-item-movil ms-2"><router-link class="nav-link"  @click="cerrarMenu()" to="/">Nosotros</router-link>
              </li>
              <!-- Multi level dropdown end-->
              
              <li class="nav-item-movil ms-2"><router-link class="nav-link"  @click="cerrarMenu()" to="/">Mayoristas</router-link>
              </li>
              <li class="nav-item-movil ms-2"><router-link class="nav-link"  @click="cerrarMenu()" to="/">Contacto</router-link>
              </li>
              <div class="position-absolute top-0 end-0">
              <div class=" d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
              <!-- Cart Dropdown-->
              <div class="nav-item-movil dropdown"><router-link class="navbar-icon-link d-lg-none"  @click="cerrarMenu()" to="/detalles_carrito"> 
              <img src="https://res.cloudinary.com/dqitdaxd8/image/upload/3042571_shkf71.png" alt="Carrito de compras" class="img-icon-head">
              <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none"></span></router-link>
              </div>
            </div>
            </div>
            </ul>
            
          </div>
          </div>
        </div>
      </nav>
      <a
        href="#hero"
        class="back-top-top-icon-wrapper w-inline-block"
        style="
          transform: translate3d(0px, 17.67px, 0px) scale3d(1, 1, 1)
            rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
          will-change: opacity, transform;
          opacity: 1;
        "
      >
        <div class="back-top-top-icon">
          <img
            src="../assets/img/66cc3988e4a8cd40b9cf4c20_Frame.svg"
            loading="lazy"
            alt=""
            class="image-24px"
          />
        </div>
        <div
          class="percentage-color"
          style="
            will-change: transform;
            transform: translate3d(-100%, 0px, 0px) scale3d(1, 1, 1)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
            transform-style: preserve-3d;
          "
        ></div>
      </a>
      <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
  </div>
</template>
<style>
 .nav-item-movil {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    padding: .2rem 0;
  }

.dropdown-menu-movil {
  float: left !important;
  left: 0;
  width: 90vw;
  position: absolute !important;
  background-color: white;
  padding: 1rem 0;
  border: none;
    
}

.dropdown-item {
  color: #000;
  padding: 0.75rem 1rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
}

.img-fluid-logo {
max-width: 150px;
    height: auto;
}
.img-icon-head{
  max-width: 25px;
    height: auto;
}
.social-container {
  display: flex;
  justify-content: flex-end; /* Empuja el contenido al lado derecho */
}
.head-menu{
  display: flex;
  justify-content: center;
}
</style>
<script>
import axios from 'axios'
var currencyFormatter = require ('currency-formatter');

export default {
  name: "topHeader",
  data() {
    return {
      user: JSON.parse(this.$store.state.user),
      count_cart: 0,
      carrito: [],
      total: 0
    };
  },
  mounted() {
  document.addEventListener('click', this.handleClickOutside);
},
beforeUnmount() {
  document.removeEventListener('click', this.handleClickOutside);
},
  methods: {
    cerrarMenu() {
    const menu = document.getElementById('navbarCollapse');
    if (menu && menu.classList.contains('show')) {
      const collapse = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
      collapse.hide();
    }
  }, handleClickOutside(event) {
    const menu = document.getElementById('navbarCollapse');
    const toggle = document.querySelector('.navbar-toggler');

    if (
      menu &&
      menu.classList.contains('show') &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      this.cerrarMenu();
    }
  },
    logout() {
      this.$store.dispatch("logout");
      if(this.$router.path !== '/') this.$router.push({ name: "home" });
      this.carrito = []
      this.count_cart = 0
      /*window.location.reload()*/ 
    },
    init_carrito() {
      if(this.$store.state.token != null){
        this.total = 0
        axios.get(this.$url + "/obtener_carrito", {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          console.log(result.data.cart_general)
          for(var item of result.data.cart_general){
            let subtotal = item.producto.precio * item.cantidad
            this.total = this.total + subtotal 
          }
          this.count_cart = result.data.cart_general.length
          this.carrito = result.data.cart
        }); 
      }
    },
    convertCurrency(number){
          return currencyFormatter.format(number,{code:'MXN'})
    },
    
  },
  created(){
    this.sockets.subscribe('listen_cart', (data) => {
    this.init_carrito();
    this.user = JSON.parse(this.$store.state.user);
});
  },
  beforeMount() {
    this.init_carrito()
  },
};
</script>
