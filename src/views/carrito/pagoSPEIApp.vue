<template>
 <div class="container mt-4">
    <div class="row justify-content-center">
     <div class="col-12 col-md-6 col-xl-8 my-4">
         
         <div class="text-center">
         
         <!-- Preheading -->
         <h4 class="text-uppercase text-muted mb-4">
             Pago a través de SPEI
         </h4>
 
         <!-- Heading -->
         <h5 class=" mb-3">
             Genera tu orden de compra con el método de pago SPEI
         </h5>
 <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-xl-8"> 
    <!-- Texto truncado -->
    <label class="  border border-dark border-1 rounded-pill" :title="textoCompleto"><b>SPEI:</b> {{ textoCompleto }} <button class="btn btn-sm btn-dark" @click="copiarTexto">
      Copiar
    </button></label>
    <label class=" border border-dark border-1 rounded-pill" title="Banco"> <b>Banco: </b>Scotiabank</label>
    <label class=" border border-dark border-1 rounded-pill" title="Banco"> <b>Destinatario: </b>EASY CHANGE SOLUTIONS SA DE CV</label>

    <!-- Botón de copiar -->
    
  </div>
  </div>
         <!-- Subheading -->
         <p class="text-muted mb-4 mt-4">
            <b> NOTA: </b> Usa como referencia de la transferencia tu orden de compra que se generara a continuación <br>
            El pago de la orden se validara en un máximo de 2 horas, posterior a esto se eliminara la orden de compra. 
         </p>
 
         <!-- Button -->
         <button class="btn btn-lg btn-primary text-white" v-on:click="generar_orden()">
             <img src="https://res.cloudinary.com/dqitdaxd8/image/upload/kOnzy_ikzcfe.gif" class="me-1" v-if="load" style="width: 30px !important;">   Generar orden </button>
         <div class="text-center mb-4 mt-2">
          <span class="text-danger">{{ msn_error }}</span>
          <span class="text-success">{{ msn_generada }} </span>
         </div>
         
         </div>
 
     </div>
 </div>
 </div>
</template>
<style>

</style>
<script>
import axios from 'axios';
export default{
  name: 'pagoSPEIApp',
  data(){
    return{
         textoCompleto: '044180256010874697',
      estado:'',
      payment_id: '',
      pago:{},
      direccion: '',
      msn_error: '',
      venta: {},
      detalles: [],
      total: 0,
      carrito: [],
      envio: 1,
      load: false,
      msn_error: '',
      msn_generada: ''
    
    }
  },
  methods:{
    generarPaymentId() {
  const now = new Date();
const fecha = now.toISOString().replace(/[-:TZ.]/g, '').slice(0, 14); 
const random = Math.floor(1000 + Math.random() * 9000); 

this.payment_id = Number(`${fecha}${random}`);
console.log(this.payment_id);
},
    copiarTexto() {
      navigator.clipboard.writeText(this.textoCompleto).then(() => {
        alert('Texto copiado al portapapeles');
      });
    },
    generar_orden(){
      this.load = true
     if(!this.carrito || this.carrito.length === 0){
      this.msn_error = 'Sin articulos en el carrito'
      this.load = false
     }else{
       this.venta.detalles = this.detalles
      axios.post(this.$url+'/crear_venta_spei_cliente',this.venta,{
          headers:{
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
        }).then((result)=>{
          if(result.data.message){
            this.msn_error = result.data.message
          }else{
            this.msn_generada = 'Se genero la orden redireccionando...'
            this.$socket.emit('send_cart',true)
            setTimeout(() => {
              this.$router.push({name: 'venta_detalle',params:{id:result.data.venta._id}})
            }, 3000);
          }
        })
     }
    },
    init_data(){
    let user_data = JSON.parse(this.$store.state.user)
    this.init_carrito()
    this.generarPaymentId()
    this.venta.transaccion = this.payment_id
    this.venta.envio = this.envio
    this.venta.cliente = user_data._id
    if(this.$route.params.direccion){
    this.direccion = this.$route.params.direccion
    this.venta.direccion = this.direccion
    }else{
      this.msn_error = 'No se obtuvo el codigo de la direccion'
    }
    console.log('direccion: ', this.$route.params.direccion)
    },
     init_carrito() {
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
            this.detalles.push({
              subtotal: subtotal,
              precio_unidad: item.producto.precio,
              cantidad: item.cantidad,
              cliente: this.venta.cliente,
              producto: item.producto._id,
              variedad: item.variedad._id
            })
          }
          this.venta.total = this.total + this.envio
          console.log('total:', this.venta.total)
          this.carrito = result.data.cart_general
          
        }); 
    },
  }, 
  beforeMount(){
     this.init_data()
  }
}

</script>
