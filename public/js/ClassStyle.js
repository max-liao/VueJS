// Options object for our instance
var data = {
    isActive: true,
    hasError: false,
    activeColor: 'blue',
    fontSize: '30px',
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.hasError,
                'text-danger': ((this.isActive && this.hasError) ? true : false)
            }
            // if (this.isActive && !this.hasError) {
            //     return {
            //         active: true, 'text-danger': false
            //     }
            // } else if (this.hasError) {
            //     return {
            //         active: true, 'text-danger': true
            //     }
            // }

            // return {
            //     active: this.isActive && !this.error,
            //     'text-danger': this.error && this.error.type === 'fatal'
            // }
        // }
    },
    errorClass: function () {
        return { 'text-danger': ((this.isActive && this.hasError) ? true : false) }
    }
}
};

var HelloW = new Vue({
    el: '#classTest',
    data: data
});

const data2 = {
    activeClass: 'active',
    isActive: true,
    hasError: false,
    styleObject:{
        color: 'green',
        fontSize: 30,   
        backgroundColor: 'black'
    }
}

var ArrayClass = new Vue({
    el: '#ArrayClassTest',
    data: data2,
    computed: {
        errorClass: function () {
            return { 'text-danger': ((this.isActive && this.hasError) ? true : false) }
        },
        ColorClass:  function () {
            return { 'background-color': (this.backgroundcolor)}
        },
    }
});

var ArrayClass = new Vue({
    el: '#conditionals',
    data: {
        type: 'D',
        loginType: 'username' 
    }
});