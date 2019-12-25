new Vue({
    el: "#app",
    data: {
        title: "Amount To Words",
        name: "Md. Imtiyaz Hossain",
        amount: 0,
        words: 0,
        theme: "alice",
        english: true,
        socialLink:{
            linkedin:"https://www.linkedin.com/in/ihhira/",
            github:"https://www.github.com/ih-hira/",
        }
    },
    methods: {
        toEnglisWord: function (e) { 
            this.amount = e.target.value;
            this.words = ToWordsBdWithTakaPaisaInEnglish(e.target.value);
        },
        toBanglaWord: function (e) {            
            this.amount = e.target.value;
            this.words = ToWordsBdWithTakaPaisaInBangla(e.target.value);
        },
        chooseTheme: function(e){
            console.log(e.target.value);
            this.theme = e.target.value;
        },
        changeLang: function(e){
            this.english = !this.english; 
        }
    }
});