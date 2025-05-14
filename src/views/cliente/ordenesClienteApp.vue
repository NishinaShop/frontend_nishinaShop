<template>

  <section class="hero">
      <div class="container">
        <!-- Breadcrumbs -->
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h3 class="mt-4">Tus ordenes</h3>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead">Estas son todas tus ordenes generadas</p></div>
          </div>
        </div>
      </div>
    </section>
  <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <table class="table table-borderless table-hover table-responsive-md">
              <thead class="bg-light">
                <tr>
                  <th class="py-4 text-uppercase text-sm">N. Orden</th>
                  <th class="py-4 text-uppercase text-sm">Fecha</th>
                  <th class="py-4 text-uppercase text-sm">Total</th>
                  <th class="py-4 text-uppercase text-sm">Estado</th>
                  <th class="py-4 text-uppercase text-sm"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ordenes">
                  <th class="py-4 align-middle"># {{ item.serie.toString().padStart(6,'0') }}</th>
                  <td class="py-4 align-middle">{{ cDate(item.createdAt) }}</td>
                  <td class="py-4 align-middle">{{ convertCurrency(item.total) }}</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-info-light">{{ item.estado_orden }}</span></td>
                  <td class="py-4 align-middle"><router-link class="btn btn-outline-dark btn-sm" :to="{name: 'venta_detalle',params:{id: item._id}}">ver</router-link></td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <!-- Customer Sidebar-->
           <sideBarCliente />
          <!-- /Customer Sidebar-->
        </div>
      </div>
    </section>
 
</template>
<script>
import axios from 'axios';
import moment from 'moment'
var currencyFormatter = require ('currency-formatter');
import sideBarCliente from '@/components/sideBarCliente.vue';

export default{
  name: 'ordenesClienteApp',
  components:{
    sideBarCliente
  },
  data(){
    return{
      ordenes: {}
    }
  },
  beforeMount(){
    this.init_data()
  },
  methods:{
    init_data(){
      axios.get(this.$url+'/listar_ordenes_admin',{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
      }).then((result)=>{
        this.ordenes = result.data.ordenes
        console.log(this.ordenes[0].serie);
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
