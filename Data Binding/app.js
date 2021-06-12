let app = new Vue ({
    el: `.app`,
    data : {
        title : `Data Binding`,
        url : `https://picsum.photos/200`,
        counter: 0,
        clientX : 0,
        clientY :0,
    },
    methods: {
        handleClick (e) {
            console.log(`click`, this.target);
            this.counter += 1;
        },

        handleClickNum (event, num) {
            // console.log(`click`, this);
            this.counter += num;
        },

        handleMouseMove (e){
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        }
    },
})