

const app = new Vue({

  el: "#app",

  data: {

    maiList: []

  },


  methods:{

    generaMaiList(){
      for (let i = 0; i < 10 ; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
          .then((res)=>{
          this.maiList = res.data.response
          console.log(this.maiList);
        })
      }
    }

  },

  mounted(){

    this.generaMaiList()

  },


})