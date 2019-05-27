// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery' 
import 'jquery-ui/external/requirejs/require'
import './jqplugs/Tdrag'
import './jqplugs/jquery-ui'
var io = require("socket.io-client");
var hostname = '127.0.0.1:3001'
var socket = io(hostname)
/* eslint-disable no-new */
var app={
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}
Vue.use(function(v){
  v.prototype.request = function d(url,data,fn){
    socket.emit('request',JSON.stringify(url+data),(...result)=>{
      return fn(...result)
    })
  }
})
new Vue(app)

socket.on('connect', function() {
  Vue.prototype.socketid = this.id
})