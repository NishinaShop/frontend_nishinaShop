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
                  <th class="py-4 text-uppercase text-sm">Order #</th>
                  <th class="py-4 text-uppercase text-sm">Date</th>
                  <th class="py-4 text-uppercase text-sm">Total</th>
                  <th class="py-4 text-uppercase text-sm">Status</th>
                  <th class="py-4 text-uppercase text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="py-4 align-middle"># 1735</th>
                  <td class="py-4 align-middle">22/6/2017</td>
                  <td class="py-4 align-middle">$150.00</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-info-light">Being prepared</span></td>
                  <td class="py-4 align-middle"><a class="btn btn-outline-dark btn-sm" href="customer-order.html">View</a></td>
                </tr>
                <tr>
                  <th class="py-4 align-middle"># 1734</th>
                  <td class="py-4 align-middle">7/5/2017</td>
                  <td class="py-4 align-middle">$150.00</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-warning-light">Action needed</span></td>
                  <td class="py-4 align-middle"><a class="btn btn-outline-dark btn-sm" href="customer-order.html">View</a></td>
                </tr>
                <tr>
                  <th class="py-4 align-middle"># 1730</th>
                  <td class="py-4 align-middle">30/9/2016</td>
                  <td class="py-4 align-middle">$150.00</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-success-light">Received</span></td>
                  <td class="py-4 align-middle"><a class="btn btn-outline-dark btn-sm" href="customer-order.html">View</a></td>
                </tr>
                <tr>
                  <th class="py-4 align-middle"># 1705</th>
                  <td class="py-4 align-middle">22/6/2016</td>
                  <td class="py-4 align-middle">$150.00</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-danger-light">Cancelled</span></td>
                  <td class="py-4 align-middle"><a class="btn btn-outline-dark btn-sm" href="customer-order.html">View</a></td>
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
import sideBarCliente from '@/components/sideBarCliente.vue';

export default{
  name: 'ordenesClienteApp',
  components:{
    sideBarCliente
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
