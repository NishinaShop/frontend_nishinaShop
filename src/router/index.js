import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { jwtDecode } from 'jwt-decode'
import store from '@/store/index'

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path:'/login', name: 'login', component: ()=> import ('@/views/loginApp.vue')},
  {path:'/catalogo', name: 'catalogo', component: ()=> import ('@/views/productos/catalogoApp.vue')},
  {path:'/detalles_producto/:slug', name: 'detalles_producto', component: ()=> import ('@/views/productos/detallesProductoApp.vue')},
  {path:'/detalles_carrito', name: 'detalles_carrito', component: ()=> import ('@/views/carrito/detalleCartApp.vue'),meta: { requiresAuth: true }},
  {path:'/cuenta/direcciones', name: 'direcciones_cliente', component: ()=> import ('@/views/cliente/direccionesApp.vue'),meta: { requiresAuth: true  }},
  {path:'/pago_carrito', name: 'pago_carrito', component: ()=> import ('@/views/carrito/pagoCartApp.vue'),meta: { requiresAuth: true  }},
  {path:'/validation/:estado/:direccion?', name: 'validation', component: ()=> import ('@/views/validacionView.vue'),meta: { requiresAuth: true }},
  {path:'/cuenta/venta/:id', name: 'venta_detalle', component: ()=> import ('@/views/cliente/ventaDetalleApp.vue'),meta: { requiresAuth: true }},
  {path:'/pagos/spei/:direccion', name: 'pago_spei', component: ()=> import ('@/views/carrito/pagoSPEIApp.vue'),meta: { requiresAuth: true  }},
  {path:'/cuenta/ordenes', name: 'ordenes_cliente', component: ()=> import ('@/views/cliente/ordenesClienteApp.vue'),meta: { requiresAuth: true }},
  {path:'/nueva_direccion', name: 'nueva_direccion', component: ()=> import ('@/views/cliente/primeraDireccionApp.vue'),meta: { requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
   const isMobile = window.innerWidth < 768;
  return {
    top: isMobile ? 140 : 240,
    behavior: 'smooth'
    }
  }
})

router.beforeEach((to, from, next) => {
 if (to.matched.some(item => item.meta.requiresAuth)){
  if(!store.state.token){
    next({
      name:'login'
    })
  }
  try{
    jwtDecode(store.state.token)
  }catch (error){
    next({
      name:'login'
    })
  }
if(jwtDecode(store.state.token).exp*1000 <= new Date().getTime()){
  next({
    name:'login'
  })
} 
  next()
  console.log('privada');
 }else{
  console.log('Publica')
  next()  
 }
})

export default router
