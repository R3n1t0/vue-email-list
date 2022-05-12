

const app = new Vue({

  el: "#app",

  data: {

    maiList: [],

    loading: true

  },


  methods:{

    /* Funzione per generare una mailing list di 10 mail */
    generaMaiList(){

      for (let i = 0; i < 10 ; i++) {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
        .then((res)=>{

          this.maiList.push(res.data.response);
          
        })

      }

      setTimeout(()=>{

        this.loading = false

      },3000)

 
    }

  },

  mounted(){

    this.generaMaiList()

  },

})