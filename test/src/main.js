// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ConfirmCom from '@/components/ConfirmCom'
import $ from 'jquery' 
Vue.config.productionTip = false

function confirmPlug (V){
  let obj = {message:""};
  V.set(obj,'message');
  
  V.prototype.$confirm = function(message,confirmFn,cancelFn){
    
    obj.message= message;
   
    obj.message = message;


  }

}
Vue.use(confirmPlug)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
