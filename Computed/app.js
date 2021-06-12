let vm = new Vue({
  el: `#app`,
  data: {
    msg: `Hello World`,
    a: 0,
    b: 0,
    number: 20,

    firstName: ``,
    name: ``,

  },
  methods: {
    // addA () {
    //     console.log(this.a);
    //     return this.a+this.number;
    // },
    // addB  () {
    //     console.log("add B");
    //     return this.b+this.number;
    // },

    handleKeyUp (e) {
        return this.firstName = e.target.value;
    }
  },
  computed: {
    reversedMessage: function () {
        // `this` points to the vm instance
        return this.msg.split('').reverse().join('');
    },
    addA () {
      console.log(this.a);
      return this.a + this.number;
    },
    addB: function () {
      console.log(this.b);
      return this.b + this.number;
    },
  },
});
