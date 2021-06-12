let vm = new Vue ({
    el: `#app`,
    data: {
        msg: `Hello World`,
        a: 0,
        b: 0,
        number: 20,
    },
    methods: {
        addA () {
            console.log("add A");
            return this.a+this.number;
        },
        addB  () {
            console.log("add B");
            return this.b+this.number;
        },
    },
    computed: {
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.msg.split('').reverse().join('');
          }
    }
});