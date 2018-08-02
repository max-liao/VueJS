// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.id}}. {{ todo.text }} \
            <button v-on:click="remove()"">X</button></li>',
    methods: {
        remove: function () {
            console.log("hello");
        },
        add: function () {
            console.log("HI")
        }
    }
});