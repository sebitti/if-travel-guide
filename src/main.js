import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './assets/css/tailwind.css'
import i18n from '../i18n'
import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

Vue.use(firestorePlugin)
Vue.use(VueFuse)
Vue.use(VModal)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyDlyEDVMvGuz3G5fX1dO2YN6KfNsnkOI_w',
  authDomain: 'if-travel-guide-5edc0.firebaseapp.com',
  databaseURL: 'https://if-travel-guide-5edc0.firebaseio.com',
  projectId: 'if-travel-guide-5edc0',
  storageBucket: 'if-travel-guide-5edc0.appspot.com',
  messagingSenderId: '286546103576',
  appId: '1:286546103576:web:d00453f76d3d0c4c3ae26d',
  measurementId: 'G-QWNS33TSR4'
})
export const db = firebase.firestore()

router.beforeEach((to, from, next) => {
  let language = to.params.lang
  if (!language) {
    language = 'ukr'
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

// firebase.auth().onAuthStateChanged(() => {
//   if (!App) {
//     /* eslint-disable no-new */
//     App = new Vue({
//       router,
//       i18n,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// })
