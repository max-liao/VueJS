// Options object for our instance
var data = { a: 1 }

var vm = new Vue({
  el: '#example',
  data: data,
  created: function () {
    // Other hooks: mounted (vm$mount: if element found, vm$el replaces element),
    // destroyed [vm$destroy()], or updated
    console.log("Anything under the 'created:' hook runs when this instance is created.");
    // `this` points to the vm instance
    console.log('a is: ' + this.a);
  }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})

var NavTabs = new Vue({
    el: "#NavTabs",
    data: {
        HomeURL: '',
        Array: [
            {id:0, url:"/", text:"Home"},
            {id:1, url:"/about", text:"About"},
            {id:2, url:"/instance", text:"Instance"}
        ]
    }
});

var Button = new Vue({
    el: "#button",
    data: {
        isButtonDisabled: null, //false/null/undefined/disabled turn off
        test: "hello"
        // rawHTML: "<a id={{href}}>Hello World!</a>"
    }
});