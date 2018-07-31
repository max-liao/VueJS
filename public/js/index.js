// new Vue({
//     el: '#app',
//     data() {
//       return{message: 'Hi Vue.js!'}
//     }
//   })

// const model = require("../models/model.js");

Vue.component('button'), {
  data:function (){
    return{
      count:0
    }
  },
  template: '<button @click="quantity++">Click Me {{quantity}} times </button>'
}