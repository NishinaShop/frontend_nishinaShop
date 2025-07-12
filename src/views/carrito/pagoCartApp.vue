<template>
  <div>
    <section class="hero">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center mt-4">
          <h3 class="">Checkout</h3>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Por favor revisa tu orden.</p></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Checkout-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <!--direccion box-->   
            <div class="block mb-5">
              <div class="block-header" ref="direccion">
                <h6 class="text-uppercase mb-0"><b>Dirección de entrega</b></h6>
            </div>
              <div class="block-body" v-if="direcciones.length >= 1">
                <div class="row">
                  <div class="mb-4 col-md-6 d-flex align-items-center" v-for="item in direcciones">
                    <input type="radio" name="shippping" id="option0" :value="item._id" v-on:change="seleccionar_direccion($event)">
                    <label class="ms-3" for="option0"><strong class="d-block text-uppercase mb-2">{{ item.calle+', '+item.colonia }}</strong>
                      <span class="text-muted ">{{'CP: '+item.codigo_postal+', '+item.ciudad+', '+item.estado}}</span> <br>
                      <span class="text-muted ">{{'Tel: '+item.n_contacto}}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="block-body" v-if="direcciones.length == 0">
                <div class="row ">
                  <div class="mb-4  align-items-center">
                    <label class="">
                      <span class="mb-2 ">No tienes direcciones guardadas.</span>
                      <div class="mt-2">
                        <router-link class="btn btn-dark" type="button" to="/nueva_direccion">Agregar direccion</router-link>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>  
            <!--direccion box-->         
            <div class="mb-5">
              <div class="cart d-none d-md-block">
                <div class="cart-wrapper">
                  <div class="cart-header text-center ">
                    <div class="row">
                      <div class="col-6">
                        <span class="text-left">Producto</span>
                      </div>
                      <div class="col-2">Precio</div>
                      <div class="col-2">Cantidad</div>
                      <div class="col-2">Total</div>
                    </div>
                  </div>
                  <div class="cart-body">
                    <!-- Product-->
                    <div class="" v-for="item in productos" >
                      <div class="row d-flex align-items-center text-center">
                        <div class="col-6">
                          <div class="d-flex align-items-center"><a href="detail.html"><img class="cart-item-img" :src="item.producto.portada"  alt="..."></a>
                            <div class="cart-title text-start"><a class="text-uppercase text-dark" href="detail.html"><strong>{{item.producto.nombre.substr(0,20)}}</strong></a><br><span class="text-muted text-sm">Talla: {{ item.talla.talla }}</span><br><span class="text-muted text-sm">Color: {{ item.color.color }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-2">{{ convertCurrency(item.producto.precio) }}</div>
                        <div class="col-2">{{ item.cantidad }}
                        </div>
                        <div class="col-2 text-center">{{ convertCurrency(item.producto.precio*item.cantidad) }}</div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="cart d-md-none">
              <div class="">
                <div class="cart-header text-center">
                  <div class="row">
                    <div class="text-center">Productos</div>
                  </div>
                </div>
                <div class="cart-body" v-if="!load_data">
                  <!-- Product-->
                  <div class="" v-for="item in productos">
                    <div class=" ">
                      <div class="">
                        <div class="d-flex justify-content-start mb-3"><router-link :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}">
                          <img :src="item.producto.portada"  style="width: 120px;">
                        </router-link>
                          <div class="cart-title text-start"><router-link class="text-uppercase text-dark" :to="{name: 'detalles_producto',params:{slug: item.producto.slug}}">
                            <span>{{ item.producto.nombre.substr(0,10) }}</span>
                          </router-link><br>
                          <span class="text-muted text-sm">Talla: {{ item.talla.talla }}</span><br><span class="text-muted text-sm">Color: {{ item.color.color }}</span>
                          <div>
                            Precio: {{convertCurrency(item.producto.precio)}}, Cantidad:  {{ item.cantidad }}
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                            <span>Total: {{ convertCurrency(item.producto.precio * item.cantidad) }}</span>
                            
                          </div>
                          </div>
                          </div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div> 
            </div>
            
            <div class="mb-2 d-flex  justify-content-between flex-column flex-lg-row">
              <router-link class="btn  btn-dark" to="/detalles_carrito"> <i class="fa fa-angle-left me-2" ></i>Regresar al carrito</router-link>
              
              <button class="btn btn-dark" v-on:click="pago_spei()">Pagar via SPEI<i class="fa fa-angle-right ms-2"></i></button>
            
            </div>
            <div class="text-danger text-end"><span>{{msn_spei}}</span></div>
            
          </div>
          <div class="col-lg-4">
            <div class="block mb-5">
              <div class="block-header">
                <h6 class="text-uppercase mb-0"><b>Tu orden</b></h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">El costo del envio puede variar dependiendode Codigo postal.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item"><span>Subtotal: </span><span class="ms-6">{{ convertCurrency(total) }}</span></li>
                  <li class="order-summary-item"><span>Envio:</span><span class="ms-6">{{ convertCurrency(envio) }}</span></li>
               
                  <li class="order-summary-item border-0"><span>Total:</span><strong class="order-summary-total ms-6" >{{ convertCurrency(total+envio) }}</strong></li>
                </ul>
              </div>
            </div>

            <div class="block mb-5" >
              <div class="block-header">
                  <h6 class="text-uppercase mb-0"><b>Método de pago </b></h6>
              </div>
              <div class="block-body bg-light pt-1 mb-3">
                  <div class="col-md-12 mb-2">
                   
                    <span class="d-block  mb-2" style="letter-spacing: 0px;font-weight: 600;">Tarjeta de crédito o débito</span>
                      <div class="row">
                          <div class="col-12 mb-2">
                              <img src="https://res.cloudinary.com/dqitdaxd8/image/upload/version-horizontal-large-logo-mercado-pago_ls4tf2.webp" style="width: 180px">
                          </div>
                          <div class="col-12">
                              <p class="text-muted" style="font-size: 13px">
                                  (Luego de hacer clic en "PAGAR" será redirigido a Mercado Pago  de forma segura para completar su compra).</p>
                          </div>
                      </div>
                  </div>
                  
               
  
                  <div class="col-md-12">
                      <p class="text-sm" style="margin-bottom: 0.4rem;">Deberes e impuestos no están incluidos en paquetes con envio internacional. /Tus datos personales serán utilizados para procesar tu pedido y respaldar tu experiencia en este sitio web.</p>
                      <a > <b> Términos & Privacidad.</b></a>
                  </div>
  
              </div>
              <div class="block-footer">
                <a  class="btn btn-dark" id="btnBuy" style="cursor:pointer;width: 100%;" v-on:click="mecadopago() ">PAGAR CON MERCADO PAGO</a>
               <div class="text-danger text-center"><span>{{ msn_error }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios'
import { ref } from 'vue';
var currencyFormatter = require ('currency-formatter');

export default {
  name: 'pagoCartApp',
  data(){
    return{
      direcciones:[],
      productos:[],
      total: 0,
      envio: 1,
      load_data: true,
      venta:{},
      items: [],
      msn_error: '',
      msn_spei: ''
    }
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
          console.log(result.data.cart_general)
          this.n_productos = result.data.cart_general.length
          for(var item of result.data.cart_general){
            let subtotal = item.producto.precio * item.cantidad
            this.total = this.total + subtotal 
            this.items.push({
              id: item.producto._id,
              title: item.producto.nombre,
              quantity: item.cantidad,
              currency_id: 'MXN',
              unit_price: item.producto.precio,
            })
          }
          this.items.push({
              title: 'Envio',
              quantity: 1,
              unit_price: this.envio,
              currency_id: 'MXN'
          });
          this.productos = result.data.cart_general
          this.load_data = false
        }); 
        
      }
    },
    convertCurrency(number){
          return currencyFormatter.format(number,{code:'MXN'})
    },
    init_direcciones(){
      axios.get(this.$url + "/obtener_direccion_cliente",{
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        }).then((result)=>{
          this.direcciones = result.data.direccion
        })
    },
    seleccionar_direccion(event){
      this.venta.direccion = event.target.value
      console.log(this.venta.direccion)
      this.msn_error = ''
      this.msn_spei = ''
    },
    mecadopago(){
      if(this.venta.direccion == null){
        this.msn_error = 'Selecciona una direccion'
         setTimeout(() => {
           this.$nextTick(() => {
          this.$refs.direccion?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
        
        return;
         }, 2000);
      }else{
        let data = {
        back_urls: {
          success: 'https://www.nishinashop.com/validation/success/'+this.venta.direccion,
          pending: 'https://www.nishinashop.com/validation/pending',
          failure: 'https://www.nishinashop.com/validation/failure'
        },
        items: this.items, 
        auto_return: 'approved',
      }
      axios.post('https://api.mercadopago.com/checkout/preferences',data,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VUE_APP_MP_ACCESS_TOKEN}`
        }
      }).then((result)=>{
        window.location.href = result.data.init_point
      }).catch((error) => {
  console.error("Error detallado:", {
    status: error.response?.status,
    data: error.response?.data,
    message: error.message,
  });
});
    
      }
    },
    pago_spei(){
      if(this.venta.direccion == null){
        this.msn_spei = 'Selecciona una direccion'
      }else {
       this.$router.push({ name: 'pago_spei', params: { direccion: this.venta.direccion } });
 

      }
    }
  },
  beforeMount(){
    this.init_carrito()
    this.init_direcciones()
  }
}

</script>
