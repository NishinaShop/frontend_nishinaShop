<template>
  <div>
    <section class="hero mt-6">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading mb-0">Login usuario</h1>
        </div>
      </div>
    </section>
    <!-- customer login-->
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="block">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Login</h6>
              </div>
              <div class="block-body">
                <p class="lead">Para clientes ya registrados.</p>
                <p class="text-muted">
                  Ingresa tu correo y tu contraseña previamente registrada con nosotros.
                </p>
                <hr />
                <form action="customer-orders.html" method="get">
                  <div class="mb-4">
                    <label class="form-label" for="email1">Correo electronico</label>
                    <input class="form-control" id="email1" type="text" placeholder="Ingresa tu correo electronico" v-model="email"/>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="password1" >Contraseña</label>
                    <input
                      class="form-control"
                      id="password1"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      v-model="password"
                    />
                  </div>
                 
                  <div class="mb-4 text-center">
                    <button class="btn btn-outline-dark" type="button" v-on:click="login()">
                      <i v-if="!gif" class="fa fa-sign-in-alt me-2"></i><img v-if="gif"  class="me-2"src="https://res.cloudinary.com/dqitdaxd8/image/upload/kOnzy_ikzcfe.gif" style="width: 25px; height: auto;"> ingresar
                    </button>
                     <div class="mt-4 text-center" v-if="msn_error_login">
                    <small class="text-danger">{{ msn_error_login }}</small>
                  </div> 
                  <div class="mt-4 text-center" v-if="msn_login">
                    <small class="text-success">{{ msn_login }}</small>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="block">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Cuenta nueva</h6>
              </div>
              <div class="block-body">
                <p class="lead">Aun no cuenta con una cuenta?</p>
                <p class="text-muted">
                  Crea una cuenta con no nosotros para disfruta de todas los beneficios de nuestra marca.
                </p>
                <hr />
                <form action="customer-orders.html" method="get">
                  <div class="mb-4">
                    <label class="form-label" for="name">Nombre:</label>
                    <input class="form-control" id="name" type="text" placeholder="Ingresa tu nombre" v-model="cliente.nombre" />
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Correo electronico:</label>
                    <input class="form-control" id="email" type="text" placeholder="Ingresa un correo electronico" v-model="cliente.email"/>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="password">Contraseña:</label>
                    <input class="form-control" id="password" type="password" placeholder="Ingresa una contraseña" v-model="cliente.password"/>
                  </div>
                  <div class="mb-4 text-center" v-if="msn_error || msn_success">
                    <small class="text-danger">{{ msn_error }}</small>
                    <small class="text-success">{{ msn_success }}</small>
                  </div>
                  <div class="mb-4 text-center">
                    <button class="btn btn-outline-dark" type="button" v-on:click="validar_registro()">
                      <i class="far fa-user me-2"></i>Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import topHeader from "@/components/topHeader.vue";
import bottomFooter from "@/components/footer.vue";
import axios from 'axios';
export default {
  name: "loginApp",
  components: {
    topHeader,
    bottomFooter,
  },
  data(){
    return{
    cliente: {},
    msn_error: '',
    email: '',
    password:'',
    msn_error_login: '',
    msn_success : '',
    gif : false,
    msn_login: ''
    }
  },
  methods:{
    validar_registro(){
    if(!this.cliente.nombre){
      this.msn_error = 'Ingrese su nombre '
    }else if(!this.cliente.email){
      this.msn_error = 'Ingrese un correo electronico'
    }else if(!this.cliente.password){
      this.msn_error = 'Ingrese una contraseña'
    }else{
      this.registro_cliente()
    }
  },
    registro_cliente(){
      axios.post(this.$url+'/registro_cliente',this.cliente,{
        headers: {
          'Content-type': 'application/json'
        }
      }).then((result)=>{
        if(result.data.message){
          this.msn_error = result.data.message
        }else{
          this.msn_error = ''
          this.msn_success = 'Tu cuenta fue creada'
          console.log(result)
          this.cliente = {}
        }
      })
      
    },
    login(){
      if(!this.email){
        this.msn_error_login = 'Ingrese un correo electronico'
      }else if(!this.password){
        this.msn_error_login = 'Ingrese una contraseña'
      }else{
        this.msn_error_login = ''
        this.gif = true
        let data = {
          email: this.email,
          password: this.password
        }
        axios.post(this.$url+'/login_cliente',data,{
          headers:{
            'Content-Type': 'application/json'
          }
        }).then((result)=>{
          if(result.data.message){
            this.gif = false
            this.msn_error_login  = result.data.message
          }else{
            this.gif = false
            this.msn_login = 'Inicio de sesión exitoso.'
            this.$store.dispatch('saveToken',result.data.token)
            this.$store.dispatch('saveUser',JSON.stringify(result.data.cliente))
                        setTimeout(() => {
              this.$router.push({name:'home'})
              this.$socket.emit('send_cart', true)
            }, 2000);
          }
        })
      }
    },
    validar_loging(){
      if(this.$store.state.token){
        this.$router.push({name: 'home'})
        window.location.reload()
      }
    },
  },
  beforeMount(){
    this.validar_loging()
  }
};
</script>
