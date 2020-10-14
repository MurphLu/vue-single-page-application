import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    hello: "hello aaaa zzz aaa ada aaa dsdsadas"
  },
  template: '<div id="app">{{hello}}</div>'
});

export { app };