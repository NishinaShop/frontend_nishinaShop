<template>
 <div class="container mt-4">
    <div class="row justify-content-center">
     <div class="col-12 col-md-6 col-xl-8 my-4">
         
         <div class="text-center">
         
         <!-- Preheading -->
         <h4 class="text-uppercase text-muted mb-4">
             Pago a traves de SPEI
         </h4>
 
         <!-- Heading -->
         <h5 class=" mb-3">
             Genera tu orden de compra con el metodo de pago SPEI
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
            El pago de la orden se validara en un maximo de 2 horas, posterior a esto se eliminara la orden de compra. 
         </p>
 
         <!-- Button -->
         <router-link to="/dashboard" class="btn btn-lg btn-primary text-white">
             Generar orden </router-link>
         
         
         </div>
 
     </div>
 </div>
 </div>
</template>
<style>

</style>
<script>
export default{
  name: 'pagoSPEIApp',
  data(){
    return{
         textoCompleto: '044180256010874697',
    
    }
  },
  methods:{
    copiarTexto() {
      navigator.clipboard.writeText(this.textoCompleto).then(() => {
        alert('Texto copiado al portapapeles');
      });
    },
  }
}
</script>
