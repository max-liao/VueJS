// make sure to call Vue.use(Vuex) if using a module system
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        input: ''
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setInput(state, newInput) {
            state.input = newInput.newValue;
        }
    }
});

const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return this.$store.state.count
        }
    }
};

const CounterApp = new Vue({
    el: '#Counter',
    // provide the store using the "store" option.
    // this will inject the store instance to all child components.
    store,
    components: { Counter },
    template: `
      <div class="app">
        <counter></counter>
        <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        </p>
      </div>
    `,
    methods: {
        increment() {
            store.commit('increment')
        },
        decrement() {
            store.commit('decrement')
        }
    }
});


const InputComponent = {
    template:
        `<div>
        <form v-on:submit.prevent="">
        <input v-model="InputValue" id="Form" placeholder="E.g. Something">
        </form>
    </div>`,
    computed: {
        InputValue: {
            get: function () {
                return this.$store.state.input
            },
            set: function (Value) {
                this.$store.state.input = Value
            }
        }
    }
};

// Define a new component called todo-item
const ToDo = Vue.component('todo-item', {
    props: {
        todo: String,
        index: Number
    },
    template:
        '<li>{{index + 1}}. {{todo}} \
        <button v-on:click="$emit(\'remove\')">X</button></li>'
});


const Input = new Vue({
    el: '#Input',
    store,
    components: { InputComponent, ToDo },
    data: {
        newToDoId: 3,
        // newToDoText: "",
        todos: [
          {id: 0, title:"Mow Lawn"},
          {id: 1, title:"Laundry"},
          {id: 2, title:"Exercise"}
        ]
    },
    template: `
      <div class="InputTest">
        <InputComponent></InputComponent>
        <p>
        <button @click="setInput">Add a To Do</button>
        </p>
        <ul>\
            <li\
                is="ToDo"\
                v-for="(todo, index) in todos"\
                v-bind:key="todo.id"\
                v-bind:todo="todo.title"\
                v-bind:index="todo.id"\
                v-on:remove="todos.splice(index, 1)"\
            ></li>\
        </ul>\

      </div>
    `,
    
    methods: {
        setInput() {
            store.commit('setInput', {
                newValue: this.$store.state.input
            });
            console.log(this.$store.state.input);
            this.todos.push({
                id: this.newToDoId++,
                title: this.$store.state.input
            });
        }
    }
})