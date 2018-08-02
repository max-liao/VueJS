Vue.component('button'), {
  data:function (){
    return{
      count:0
    }
  },
  template: '<button @click="quantity++">Click Me {{quantity}} times </button>'
}