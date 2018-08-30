// Options object for our instance
var data = {
    a: 1,
    firstName: 'Foo',
    lastName: 'Bar',
    yesNo: ''
}

var vm = new Vue({
    el: '#example',
    data: data,
    computed: {
        // If either dependency changed this.fullName is automatically cached here
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    created: function () {
        // Other hooks: mounted (vm$mount: if element found, vm$el replaces element), destroyed [vm$destroy()], or updated
        console.log("Anything under the 'created:' hook runs when this instance is created.");
        // `this` points to the vm instance
        console.log('a is: ' + this.a);
    }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

var NavTabs = new Vue({
    el: "#NavTabs",
    data: {
        HomeURL: '',
        Array: [
            { id: 0, url: "/", text: "Index" },
            { id: 1, url: "/home", text: "Home" },
            { id: 2, url: "/instance", text: "Instance" },
            { id: 2, url: "/about", text: "About" }
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

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function (newQuestion, oldQuestion) {
            console.log(newQuestion + " replacing: " + oldQuestion)
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        // In this case, we want to limit how often we access
        // yesno.wtf/api, waiting until the user has completely
        // finished typing before making the ajax request. To learn
        // more about the _.debounce function (and its cousin
        // _.throttle), visit: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    watchExampleVM.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    watchExampleVM.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
});

// $watch is an instance method
_.debounce(vm.$watch('a', function (newValue, oldValue) {
    console.log(`${oldValue} changed to  ${newValue}`)
    // This callback will be called when `vm.a` changes
    var vm = this
    axios.get('https://yesno.wtf/api')
        .then(function (response) {
            vm.yesNo = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
            vm.yesNo = 'Error! Could not reach the API. ' + error
        })
}), 500)
