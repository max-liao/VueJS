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
        setInput (state, newInput){
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
    template: `<div>{{ InputValue }}</div>`,
    computed: {
        InputValue() {
            return this.$store.state.input
        }
    }
};

const Input = new Vue({
    el: '#Input',
    store,
    components: { InputComponent },
    template: `
      <div class="InputTest">
        <InputComponent></InputComponent>
        <p>
        <button @click="setInput">Test</button>
        </p>
      </div>
    `,
    methods: {
        setInput() {
            store.commit('setInput',{
                newValue: 'HI WORLD'
            });
        }
    }
})
