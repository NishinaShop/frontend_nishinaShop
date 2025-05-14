<template>
  <div>
    <div v-if="!load_data">
     <div v-if="acceso">
      <section class="hero">
      <div class="container">
        <!-- Breadcrumbs -->
        
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h3 class="mt-5">Orden #{{ n_orden.toString().padStart(6,'0') }}</h3>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">La orden  #{{ n_orden.toString().padStart(6,'0') }} se realizó el <strong>{{ cDate(venta.createdAt) }}</strong> y actualmente se encuentra en <strong>{{ item.estado_orden }}</strong>.</p>
              <p class="text-muted">Si tiene alguna pregunta, no dude en<a > contactarnos</a>, nuestro centro de atención al cliente está trabajando para usted de <br> 8:00 a 7:00, Lunes a Viernes</p></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="cart">
              <div class="cart-wrapper">
                <div class="cart-header text-center">
                  <div class="row">
                    <div class="col-6">Nombre</div>
                    <div class="col-2">Precio</div>
                    <div class="col-2">Cantidad</div>
                    <div class="col-2">Total</div>
                  </div>
                </div>
                <div class="cart-body">
                  <!-- Product-->
                  <div class="" v-for="item in detalles">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-5">
                        <div class="d-flex align-items-center"><router-link :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}"><img class="cart-item-img" :src="item.producto.portada"  alt="..."></router-link>
                          <div class="cart-title text-start"><router-link class="text-uppercase text-dark" :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}"><strong>{{ item.producto.nombre.substr(0,20) }}</strong></router-link><br><span class="text-muted text-sm">Talla: {{ item.variedad.talla }}</span><br><span class="text-muted text-sm">Color: {{ item.variedad.color }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">{{convertCurrency(item.producto.precio)}}</div>
                      <div class="col-2">
                        {{ item.cantidad }}
                      </div>
                      <div class="col-2 text-center">{{convertCurrency(item.producto.precio*item.cantidad)}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row my-5">
              <div class="col-md-6">
                <div class="block mb-5">
                  <div class="block-header">
                <h6 class="text-uppercase mb-0">Tu orden</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">El costo del envio puede variar dependiendode Codigo postal.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item"><span>Subtotal: </span><span>&nbsp;&nbsp; {{ convertCurrency(venta.total) }}</span></li>
                  <li class="order-summary-item"><span>Costo del envio:</span><span>&nbsp;&nbsp; {{ convertCurrency(venta.envio) }}</span></li>
                  <li class="order-summary-item border-0 "><span class="text-center">Total: </span><strong class="order-summary-total ">&nbsp;&nbsp; {{ convertCurrency(venta.total+venta.envio) }}</strong></li>
                </ul>
              </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="block-header">
                  <h6 class="text-uppercase mb-0">Direccion de envio</h6>
                </div>
                <div class="block-body bg-light pt-1">
                  <p>{{ venta.direccion.nombre }}<br>{{ venta.direccion.calle }} {{ venta.direccion.colonia }}<br>CP.{{ venta.direccion.codigo_postal }},<br> {{ venta.direccion.ciudad }}<br>{{ venta.direccion.estado }}<br><strong>Tel: {{ venta.direccion.n_contacto }}</strong></p>
                </div>
              </div>
            </div>
          </div>

          <sideBarCliente />
        </div>
      </div>
    </section> 
     </div>
     <div v-if="!acceso">
      <div class="container mb-6 mt-6" >
        <div class="row">
          <div class="col-12 text-center">
            <h1>No tienes acceso a esta zona</h1>
          </div>
        </div>
      </div>
     </div> 
    </div>  
    <div v-if="load_data">
      <div class="container mb-6 mt-6" >
        <div class="row">
          <div class="col-12 text-center">
            <img src="../../../public/assets/img/loading.gif" style="width: 80px;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment'
var currencyFormatter = require ('currency-formatter');
import sideBarCliente from '@/components/sideBarCliente.vue';

export default {
  name: 'ventaDetalleApp',
  components:{
    sideBarCliente,
  },
  data(){
    return{
      venta: {},
      detalles: [],
      acceso: true,
      load_data: true,
      n_orden : 0
    }
  },
  beforeMount(){
    this.init_venta()
  },
  methods:{
    init_venta(){
      this.load_data = true;
      axios.get(this.$url+'/obtener_venta/'+this.$route.params.id,{
        headers:{
          'Content-Type': 'application/JSON',
          'Authorization': this.$store.state.token
        }
      }).then((result)=>{
        console.log(result)
        if(result.data.message){
          this.acceso= false
        }else{
        this.venta = result.data.venta
        this.detalles = result.data.detalles
        this.acceso= true
        this.n_orden = this.venta.serie
        console.log(result)
        }
        this.load_data = false;
      })
    },
    cDate(item){
      return moment(item).format('DD/MM/YYYY')
    },
    convertCurrency(number){
          return currencyFormatter.format(number,{code:'MXN'})
    },
  }
}
</script>