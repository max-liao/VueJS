// Define a new component called todo-item
Vue.component('navbar', {
    props: {
        href: String
    },
    template:
    '<div class="navbar-wrapper"> \
        <div class="navbar navbar-inverse navbar-fixed-top">\
            <div class="navbar-inner">\
                <div class="container">\
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
						<span class="icon-bar"></span>\
						<span class="icon-bar"></span>\
						<span class="icon-bar"></span>\
                    </a>\
                    <h1 class="brand">\
                        <a v-bind:href="href">Hello World!</a>\
					</h1>\
                </div>\
            </div>\
        </div>\
    </div>',

    methods: {
        remove: function () {
            console.log("Remove");
        },
        add: function () {
            console.log("Add")
        }
    }
});