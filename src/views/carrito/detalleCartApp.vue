<template>
  <div>
    <section class="hero">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h3 class="mt-5">Detalles del carrito</h3>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead text-muted"> Tienes {{ n_productos }} productos en tu carrito</p></div>
            <p class="text-muted">Tiempo restante para completar tu compra: <b>{{ Math.floor(countdown / 60) }}:{{ (countdown % 60).toString().padStart(2, '0') }}</b></p>

          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section-->
    <section>
      <div class="container">
        <div class="row mb-5"> 
          <div class="col-lg-8">
            <div class="cart d-none d-md-block">
              <div class="cart-wrapper">
               <div class="cart-header  text-center">
                  <div class="row">
                    <div class="col-5">Producto</div>
                    <div class="col-2">Precio</div>
                    <div class="col-2">Cantidad</div>
                    <div class="col-2">Total</div>
                    <div class="col-1"></div>
                  </div>
                </div>
                <div class="cart-body" v-if="!load_data">
                  <!-- Product-->
                  <div class="" v-for="item in carrito">
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
                      <div class="col-1 text-center"><a class="cart-remove" style="cursor:pointer" v-on:click="eliminar_producto_cart(item._id)"> <i class="fa fa-times"></i></a></div>
                    </div>
                  </div>
                </div>
                <div class="cart-body" v-if="n_productos === 0 && !load_data">
                  <div class="row">
                    <div class="col-12">
                      <p><b>El carrito esta vacio</b></p>
                    </div>
                  </div>
                  <div class="cart-body" v-if="load_data">
                  <div class="row">
                    <div class="col-12">
                      <img src="../../../public/assets/img/loading.gif" style="width: 60px !important;">
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <!-- Version mobil-->
             <div class="cart d-md-none">
              <div class="">
                <div class="cart-header text-center">
                  <div class="row">
                    <div class="text-center">Productos</div>
                  </div>
                </div>
                <div class="cart-body" v-if="!load_data">
                  <!-- Product-->
                  <div class="" v-for="item in carrito">
                    <div class=" ">
                      <div class="">
                        <div class="d-flex justify-content-start mb-3"><router-link :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}">
                          <img :src="item.producto.portada"  style="width: 120px;">
                        </router-link>
                          <div class="cart-title text-start"><router-link class="text-uppercase text-dark" :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}">
                            <span>{{ item.producto.nombre.substr(0,10) }}</span>
                          </router-link><br>
                          <span class="text-muted text-sm">Talla: {{ item.variedad.talla }}</span><br><span class="text-muted text-sm">Color: {{ item.variedad.color }}</span>
                          <div>
                            Precio: {{convertCurrency(item.producto.precio)}}, Cantidad:  {{ item.cantidad }}
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                            <span>Total: {{ convertCurrency(item.producto.precio * item.cantidad) }}</span>
                            <a
                              class="btn btn-danger"
                              style="cursor:pointer"
                              @click="eliminar_producto_cart(item._id)"
                            >
                              <i class="fa fa-times"></i>
                            </a>
                          </div>
                          
                        
                          </div>
                          </div>
                      </div>
                     </div>
                  </div>
                </div>
                <div class="cart-body" v-if="n_productos === 0 && !load_data">
                  <div class="row">
                    <div class="col-12">
                      <p><b>El carrito esta vacio</b></p>
                    </div>
                  </div>
                  <div class="cart-body" v-if="load_data">
                  <div class="row">
                    <div class="col-12">
                      <img src="../../../public/assets/img/loading.gif" style="width: 60px !important;">
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div> 
               
             <!--Fin version movil-->
            <div class="my-5 d-flex justify-content-between flex-column flex-lg-row"><router-link class="btn btn-dark " to="/catalogo"><i class="fa fa-chevron-left"></i> Continuar comprando</router-link></div>
          </div>
          <div class="col-lg-4">
            <div class="block mb-5">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Tu orden</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">El costo del envio puede variar dependiendode Codigo postal.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item"><span>Subtotal: </span><span>&nbsp;&nbsp; {{ convertCurrency(total) }}</span></li>
                  <li class="order-summary-item"><span>Costo del envio:</span><span>&nbsp;&nbsp; {{ convertCurrency(envio) }}</span></li>
                  <li class="order-summary-item border-0 "><span class="text-center">Total: </span><strong class="order-summary-total ">&nbsp;&nbsp; {{ convertCurrency(total+envio) }}</strong></li>
                </ul>
              </div>
              <button class="btn btn-dark" v-on:click="validar_carrito()">Proceder al pago <i class="fa fa-chevron-right"></i></button>
              <div class="mt-2 text-center ">
              <span class="text-danger">{{ msn_vacio }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios'
var currencyFormatter = require ('currency-formatter');

export default {
  name: 'detallesCartApp',
  data(){
    return{
      n_productos: 0,
      total: 0,
      carrito:[],
      load_data: true,
      envio:1,
      msn_cart : '',
      msn_vacio: '',
      timer: null,
    countdown: 3600,
    intervalo: null
    }
  },
  mounted() {
  this.verificarTemporizador()
},
  methods:{
    init_carrito() {
      this.envio = this.$envio
      if(this.$store.state.token != null){
        this.load_data = true
        this.total = 0
        axios.get(this.$url + "/obtener_carrito", {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          this.n_productos = result.data.cart_general.length
          if(this.n_productos == 0 ){
            this.load_data = false
            this.msn_cart = 'Sin articulos en el carrito'
          }else{
            console.log(result.data.cart_general)
          for(var item of result.data.cart_general){
            let subtotal = item.producto.precio * item.cantidad
            this.total = this.total + subtotal 
          }
          this.carrito = result.data.cart_general
          this.load_data = false
          }
        }); 
      }
    },
    validar_carrito(){
      if(this.n_productos === 0){
        this.msn_vacio = 'El carrito esta vacio'
      }else{
        this.$router.push({name: 'pago_carrito'}) 
      }
    },
    convertCurrency(number){
          return currencyFormatter.format(number,{code:'MXN'})
    },
    eliminar_producto_cart(id){
      axios.delete(this.$url + "/eliminar_producto_carrito/"+id,{
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        }).then((result)=>{
          this.init_carrito()
          this.$socket.emit('send_cart',true)
        })
    },
    iniciarContador() {
    clearTimeout(this.timer)
    clearInterval(this.intervalo)

    this.intervalo = setInterval(() => {
      this.countdown--
      if (this.countdown <= 0) {
        this.borrar_carrito()
      }
    }, 1000)
  },
  reiniciarTemporizador() {
    const nuevaExpiracion = Date.now() + 3600000// 10 minutos
    localStorage.setItem('carrito_expiracion', nuevaExpiracion.toString())
    this.countdown = 3600
    this.iniciarContador()
  },
  borrar_carrito(){
    axios.delete(this.$token+'/eliminar_carrito',{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.$store.state.token
      }
    }).then((result)=>{
      this.$socket.emit('send_cart',true)
    })
    this.$socket.emit('send_cart',true)
  },
  verificarTemporizador() {
    const expiracion = localStorage.getItem('carrito_expiracion')

    if (expiracion) {
      const tiempoRestante = Math.floor((parseInt(expiracion) - Date.now()) / 1000)

      if (tiempoRestante <= 0) {
        this.borrar_carrito()
      } else {
        this.countdown = tiempoRestante
        this.iniciarContador()
      }
    } else {
      this.reiniciarTemporizador()
    }
  },
  },
  beforeMount(){
    this.init_carrito()
  }
}

</script>
