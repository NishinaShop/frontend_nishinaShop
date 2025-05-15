<template>
  <div >
    <section class="hero">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="mt-6">Direccion</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 col-xl-9">
            <form action="#">
              <div class="block">
                <!-- Invoice Address-->
                <div class="block-header">
                  <h6 class="text-uppercase mb-0"><b>Nueva direccion</b></h6>
                </div>
                <div class="block-body">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label class="form-label" for="fullname_invoice"><b>Nombre completo</b></label>
                      <input class="form-control" type="text" v-model="direccion.nombre" placeholder="Joe Black" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="street_invoice"><b>Calle</b></label>
                      <input class="form-control" type="text" v-model="direccion.calle"  placeholder="Calle y numero" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="street_invoice"><b>Colonia</b></label>
                      <input class="form-control" type="text" v-model="direccion.colonia"  placeholder="Colonia" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="city_invoice"><b>Ciudad</b></label>
                      <input class="form-control" type="text" v-model="direccion.ciudad"  placeholder="Ciudad" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="zip_invoice"><b>Codigo postal</b></label>
                      <input class="form-control" type="text" v-model="direccion.codigo_postal"  placeholder="Postal code" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="state_invoice"><b>Estado</b></label>
                      <input class="form-control" type="text" v-model="direccion.estado"  placeholder="Estado" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="emailaddress_invoice"><b>email de contacto</b></label>
                      <input class="form-control" type="text" v-model="direccion.email"  placeholder="joe.black@gmail.com" >
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phonenumber_invoice"><b>Numero de contacto</b></label>
                      <input class="form-control" type="text" v-model="direccion.n_contacto"  placeholder="Numero de telefono" >
                    </div>
                  </div>
                  <!-- /Invoice Address-->
                </div>
                <!-- Shippping Address-->
                
              </div>
              <div class="mb-4 mt-3 text-center">
                <button class="btn btn-dark" type="button" v-on:click="crear_direccion()"><i class="far fa-save me-2" v-if="!load_data"></i><img src="https://res.cloudinary.com/dqitdaxd8/image/upload/kOnzy_ikzcfe.gif" class="me-1" v-if="load_data" style="width: 30px !important;">Guardar direccion</button>
              </div> 
              <div class="text-center" >
                <span class="text-danger" v-if="msn_error">{{ msn_error }}</span>
                <span class="text-success" v-if="msn_guardado">{{ msn_guardado }}</span>
              </div>
            </form>
            
          </div>
          <!-- Customer Sidebar-->
          
          <sideBarCliente />
          <!-- /Customer Sidebar-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
import sideBarCliente from '@/components/sideBarCliente.vue';

export default {
  name: 'primeraDireccionApp',
  data(){
    return{
      direccion:{},
      msn_error : '',
      list_direcciones:[],
      msn_guardado: '',
      load_data: false
    }
  },
  components:{
    sideBarCliente,
  },
  methods:{
    crear_direccion(){
      if(!this.direccion.nombre){
        this.msn_error = 'Ingresa tu nombre'
      }else  if(!this.direccion.calle){
        this.msn_error = 'Ingresa tu calle'
      }else  if(!this.direccion.colonia){
        this.msn_error = 'Ingresa tu colonia'
      }else  if(!this.direccion.ciudad){
        this.msn_error = 'Ingresa tu ciudad'
      }else  if(!this.direccion.codigo_postal){
        this.msn_error = 'Ingresa tu codigo postal'
      }else  if(!this.direccion.estado){
        this.msn_error = 'Ingresa tu estado'
      }else  if(!this.direccion.email){
        this.msn_error = 'Ingresa tu numero de email'
      }else  if(!this.direccion.n_contacto){
        this.msn_error = 'Ingresa tu numero de contacto'
      }else {
        this.load_data = true
        axios.post(this.$url + "/agregar_direccion_cliente",this.direccion,{
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        }).then((result)=>{
          this.load_data = false
          this.msn_error = ''
          this.msn_guardado = 'Se guardo tu direccion' 
          this.direccion = {}
          setTimeout(() => {
            this.$router.push({name: 'pago_carrito'})
          }, 2000);
        })
      }
      
    },
  },
  beforeMount(){
  }
}
</script>
