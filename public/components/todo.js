// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: {
        todo: String,
        index: Number
    },
    template:
    '<li>{{index + 1}}.{{todo}} \
    <button v-on:click="$emit(\'remove\')">X</button></li>',
    // <button v-on:click="remove()"">X</button></li>',
    methods: {
    }
});

Vue.component('todo-list', {
    model: {
        prop: 'checked',
        event: 'input'
    },
    props: ['todos', 'addnewtodo','checked'],
    computed: {
      newToDoText:{
        get: function (){
            return this.checked;
        },
        set: function (Value){
            this.checked = Value;
        }
      }
    },
    template:
    '<div id="todo-list-example">\
        <form v-on:submit.prevent="addnewtodo">\
            <label for="new-todo">Add a todo</label>\
            <input \
                v-bind:value="checked"\
                id="new-todo"\
                placeholder="E.g. Feed the cat"\
            >\
            <button>Add</button>\
        </form>\
        <ul>\
            <li\
                is="todo-item"\
                v-for="(todo, index) in todos"\
                v-bind:key="todo.id"\
                v-bind:todo="todo.title"\
                v-bind:index="todo.id"\
                v-on:remove="todos.splice(index, 1)"\
            ></li>\
        </ul>\
    </div>'
});

