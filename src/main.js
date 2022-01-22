import Vue from 'vue'
import App from './App.vue'
import Vuesax, {vsButton, vsPopup, vsSelect} from 'vuesax'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import  jQuery from 'jquery';
import 'material-icons/iconfont/material-icons.css';
// import 'VueFormWizard'
import 'vuesax/dist/vuesax.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// import VueFormWizard from 'vue-form-wizard'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
// Vue.component('date-picker', VuePersianDatetimePicker);
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import {BAlert, BButton, BCard, BCollapse, BootstrapVue, BProgress, IconsPlugin} from 'bootstrap-vue'
// import {BootstrapVue,Bootstrap-steps} from 'bootstrap-vue'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

Vue.use(VueAxios, axios)

Vue.use(VueSidebarMenu)
// Vue.use(VueFormWizard)


Vue.component('date-picker',VuePersianDatetimePicker)
Vue.use(VuePersianDatetimePicker, {
  name: 'custom-date-picker',
  props: {
    inputFormat: 'YYYY-MM-DD HH:mm',
    format: 'jYYYY-jMM-jDD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'لطفا تاریخ را انتخاب کنید',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#ee400c',
    autoSubmit: false,
    //...
    //... And whatever you want to set as default
    //...
  }

});
Vue.component('b-progress',BProgress)
Vue.component('b-collapse',BCollapse)
Vue.component('b-button',BButton)
Vue.component('b-card',BCard)
Vue.component('b-alert',BAlert)
Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(jQuery)
Vue.use(vsPopup)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
