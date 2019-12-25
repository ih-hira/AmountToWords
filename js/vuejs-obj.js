new Vue({
    el: "#app",
    data: {
        title: "Amount To Words",
        name: "Md. Imtiyaz Hossain",
        amount: 0,
        words: 0,
        theme: "alice",
        socialLink:{
            linkedin:"https://www.linkedin.com/in/ihhira/",
            github:"https://www.github.com/ih-hira/",
        }
    },
    methods: {
        toWord: function (e) {
            this.amount = e.target.value;
            this.words = ToWordsBdWithTakaPaisa(e.target.value);
        },
        chooseTheme: function(e){
            this.theme = e.target.value;
        }
    }
});