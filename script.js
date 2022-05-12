

const app = new Vue({

  el: "#app",

  data: {

    apiUrl: "https://flynn.boolean.careers/exercises/api/random/mailx",

    maiList: [],

    totalMails: 10,

    isLoading: true,

    isError: false,

    errorMessage: ""

  },


  methods:{

    /* Funzione per generare una mailing list di 10 mail */
    generaMaiList(){

      for (let i = 0; i < this.totalMails ; i++) {

        axios.get(this.apiUrl) 
        .then((res)=>{

          this.maiList.push(res.data.response);
          if(this.maiList.length === this.totalMails){
            this.isLoading = false
          }
          
        })

        .catch((error)=>{

          this.errorMessage = error;
          this.isError = true

        })

      }

    }

  },

  mounted(){

    this.generaMaiList()

  },

})