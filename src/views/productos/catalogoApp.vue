<template>
  <div>
    <section class="hero">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content  text-center  mb-5">
          <h2 class="text-center fs-1 mt-5 ">Catalogo</h2>
          <div class="row">
            <div class="col-xl-8 offset-xl-2">
              <p class="lead text-muted">
                Se estan mostrando todo el catalogo que tenemos disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container d-none d-md-inline">
      <div class="row">
        <!-- Grid -->
        <div class="products-grid col-xl-8 col-lg-8 order-lg-2">
          <header class="product-grid-header ">
            <div class="me-3 mb-3">
              Showing <strong>1-12 </strong>of <strong>158 </strong>products
            </div>
            <div class="me-3 mb-3">
              <span class="me-2">Show</span
              ><a class="product-grid-header-show active" href="#">12 </a
              ><a class="product-grid-header-show" href="#">24 </a
              ><a class="product-grid-header-show" href="#">All </a>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <span class="d-inline-block me-2">Sort by</span>
              <select class="form-select w-auto border-0">
                <option value="orderby_0">Default</option>
                <option value="orderby_1">Popularity</option>
                <option value="orderby_2">Rating</option>
                <option value="orderby_3">Newest first</option>
              </select>
            </div>
          </header>
          <div class="row" >
            <!-- product-->
            <div class="col-xl-4  col-6" v-for=" item in data_catalogo">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-warning " v-if="item.descuento">Descuento</div>
                  <div v-if="!item.estado"></div>
                  <img
                    class="img-fluid"
                    :src="item.portada"
                    alt="product"
                    style="height: 420px !important;"
                  />
                  <div class="product-hover-overlay">
                    <router-link  :to="{name: 'detalles_producto',params:{slug: item.slug}}"
                      class="product-hover-overlay-link"
                    ></router-link>
                    
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                  <h3 class="h6 text-uppercase mb-1">
                    <a class="text-dark" href="detail.html">{{ item.nombre }}</a>
                  </h3>
                  <span class="text-muted">{{ convertCurrency(item.precio) }}</span>
                </div>
              </div>
            </div>
            <!-- /product-->

            <!-- /product-->
          </div>
          <!-- Pagination-->
          
        </div>
        <!-- / Grid End-->
        <!-- Sidebar-->
        <div class="sidebar col-xl-3 col-lg-4 order-lg-1 ms-5 d-none d-md-inline">
          <div class="sidebar-block px-3 px-lg-0 me-lg-4 ">
            <a class="tile"><b>Productos</b></a
            >
            <div class="expand-lg collapse" id="categoriesMenu">
              <div class="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                <div
                  class="sidebar-menu-item mb-2 active"
                  data-bs-toggle="collapse"
                  data-bs-target="#subcategories_0"
                  aria-expanded="false"
                  aria-controls="subcategories_0"
                  role="menuitem"
                >
                  <a class="nav-link active"
                    ><span>Genero</span
                    ><span class="sidebar-badge ms-2">123</span></a
                  >
                </div>
                <div class="collapse show" id="subcategories_0">
                  <div class="nav nav-pills flex-column ms-3">
                    <a class="nav-link mb-2" href="#!">Mujer</a
                    ><a class="nav-link mb-2" href="#!">Hombre</a
                    ><a class="nav-link mb-2" href="#!">Niña</a
                    ><a class="nav-link mb-2" href="#!">Niño</a>
                  </div>
                </div>
                <div
                  class="sidebar-menu-item mb-2"
                  data-bs-toggle="collapse"
                  data-bs-target="#subcategories_1"
                  aria-expanded="false"
                  aria-controls="subcategories_1"
                  role="menuitem"
                >
                  <a class="nav-link" href="#!"
                    ><span>Categorias</span
                    ><span class="sidebar-badge ms-2">55</span></a
                  >
                </div>
                <div class="collapse" id="subcategories_1">
                  <div class="nav nav-pills flex-column ms-3">
                    <a class="nav-link mb-2" href="#!">Tops</a
                    ><a class="nav-link mb-2" href="#!">Blusas</a
                    ><a class="nav-link mb-2" href="#!">Pantalones</a
                    ><a class="nav-link mb-2" href="#!">Conjuntos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Sidebar end-->
      </div>
    </div>
    <!-- movil -->
    <div class="container-fluid p-2 d-lg-none">
      <small class="d-block text-start">Categorias:</small>
      <div class="scroll-horizontal mb-1">
    <button class="btn btn-dark">Blusas</button>
    <button class="btn btn-dark">Tops</button>
    <button class="btn btn-dark">Abrigos</button>
    <button class="btn btn-dark">Blazer</button>
    <button class="btn btn-dark">Overtsize</button>
  </div>
    <!-- Fila de productos -->
    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2" id="products-container">
        <!-- Producto 1 -->
        <div class="col" v-for="item in data_catalogo">
            <div class="product">
              <div class="product-image  h-100">
                <router-link :to="{name: 'detalles_producto',params:{slug: item.slug}}"><img :src="item.portada" class="card-img-top img-fluid h-100" style="height: 280px !important;" alt="Producto 1"></router-link>
                <div class="card-body p-2">
                    <h6 class="card-title mb-1">{{ item.nombre }}</h6>
                    <p class="card-text text-dark fw-bold">{{convertCurrency(item.precio)}}</p> 
                </div>
            </div>
            </div>
        </div>
        
        <!-- Producto 2 -->
    </div>
</div>
    <!-- movil -->
  </div>
</template>
<style>
  .scroll-horizontal {
      overflow-x: auto;
      white-space: nowrap;
    }

    .scroll-horizontal .btn {
      display: inline-block;
      margin-right: 0.1rem;
    }
</style>
<script>
import topHeader from "@/components/topHeader.vue";
import bottomFooter from "@/components/footer.vue";
import axios from "axios"
var currencyFormatter = require ('currency-formatter');

export default {
  name: "catalogoApp",
  components: {
    topHeader,
    bottomFooter,
  },
  data(){
    return{
      data_catalogo: []
    }
    
  },
  methods:{
    init_catalogo(){
      axios.get(this.$url+'/obtener_catalogo_publicos',{
        headers:{
          'Content-type': 'application/json'
        }
      }).then((result)=>{
        this.data_catalogo= result.data
        console.log(this.data_catalogo)
      })
    },
    convertCurrency(number){
                return currencyFormatter.format(number,{code:'MXN'})
    },

  },
  beforeMount(){
    this.init_catalogo()
  }
};
</script>
