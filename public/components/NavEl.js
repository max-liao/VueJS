Vue.component('navele', {
    props: {
        href: String,
        text: String
    },
    template: '<a :href="href">{{text}} </a>',
    methods: {
        remove: function () {
            console.log("hello");
        },
        add: function () {
            console.log("HI")
        }
    }
});