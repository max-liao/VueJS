
var helloWorld = new Vue({
  el: "#hello-world",
  data: {
    msg: 'Hello World!'
  }
});

var hover = new Vue({
  el: '#hoverTip',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true
  }
});

var testList = new Vue({
  el: "#testList",
  data: {
    groceryList: [
      { id: 0, text: 'Veg' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Food' }
    ]
  }
});

var list = new Vue({
  el: "#list",
  data: {
    products: [
      'Oreos',
      'Cheesecake'
    ],
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  methods: {
    remove: function () {
      console.log("hello");
    },
    add: function () {
      console.log("HI")
    }
  }
});
// list.products.push("Thanks for replying world");

var button = new Vue({
  el: "#CountButton",
  data: {
    MESSAGE: 'RACECAR ABCD'
  },
  methods: {
    reverseMessageFunc: function () {
      return this.MESSAGE = this.MESSAGE.split('').reverse().join('')
    }
  },
  computed: {
    // Same as reverseMessageFunc but computed properties are cached and change automatically with their dependencies (i.e. this.MESSAGE)
    // As long as this.MESSAGE is not changed, this property will immediately update/return without having to run the function again
    // TL;DR. No dependency changes -> no updates.
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.MESSAGE.split('').reverse().join('')
    }
  }
});









Vue.component('button'), {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="quantity++">Click Me {{quantity}} times </button>'
}