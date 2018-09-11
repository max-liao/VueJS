var NavTabs = new Vue({
    el: "#NavTabs",
    data: {
        HomeURL: '',
        Array: [
            {id:0, url:"/", text:"Index"},
            {id:1, url:"/home", text:"Home"},
            {id:2, url:"/instance", text:"Instance"},
            {id:2, url:"/about", text:"About"}
        ]
    }
});

var myComponent = new Vue({
    el: ".baz",
    data: {
        isActive: true
    }
});

var form = new Vue({
    el: '#form-options',
    data: {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    },
    props: ['picked']
  })