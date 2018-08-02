// Options object for our instance
var data = { a: 1 }

var vm = new Vue({
  el: '#example',
  data: data,
  created: function () {
    // `this` points to the vm instance
    console.log("Created hook allows this function to run when instance is created.");
    console.log('a is: ' + this.a);
  }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})