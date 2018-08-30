
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
    numbers: [1, 2, 3, 4, 5],
    groceryList: {
      First: 'Veg',
      Second: 'Cheese',
      Third: 'Food'
    }
  },
  // In situations where computed properties are not feasible (e.g. inside nested v-for loops), you can use a method instead
  computed: {
    oddNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 !== 0
      });
    }
  }
});

//Replace 1 value
//list.products.splice(index, 1, "Chocolate")
//Vue.set(list.products, index, "Cake")

//Extend length
//list.products.splice(newLength)

var list = new Vue({
  el: "#list",
  data: {
    HashTag: "#",
    products: [
      'Oreos',
      'Cheesecake',
      'Ice Cream'
    ],
    groceryList: [
      { id: 1, text: 'Vegetables' },
      { id: 2, text: 'Cheese' },
      { id: 3, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  methods: {
    hi: function () {
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

var ForIfExample = new Vue({
  el: "#ForIf",
  data: {
    tasks: [
      {task:"Work", isComplete: 1},
      {task:"Play", isComplete: 0}
    ]
  }
});

var toDoList = new Vue({
  el: "#todoList",
  data: {
    newToDoId: 3,
    test: "",
    todos: [
      {id: 0, title:"Mow Lawn"},
      {id: 1, title:"Laundry"},
      {id: 2, title:"Exercise"}
    ]
  },
  methods:{
    addNewToDo: function(){
      this.todos.push({
        id: this.newToDoId++,
        // title: this.newToDo
      });
      console.log(this.newToDo);
    }
  },
  computed:{
    newToDo:{
      get: function (){
          return this.test;
      },
      set: function (Value){
          this.test += Value;
      }
    }
  }
});


// Vue.component('button'), {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button @click="quantity++">Click Me {{quantity}} times </button>'
// }