//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTE LE VARIABILI
            email: [],
            numeroUtente: 0,
            isLoading: false,
            datoDiAppoggio: 0,
        }
    },
    methods: {
        // FUNZIONE PER GENERARE EMAIL TRAMITE AXIOS.GET BASATE SU UN INPUT UTENTE

        generaEmail(numero, datoDiAppoggio) {

            // A OGNI CLICK ELIMINO LE PRECEDENTI
            this.email = [];
            // USO UN DATO DI APPOGGIO PER POI POTER PULIRE L'INPUT
            datoDiAppoggio = numero
            this.numeroUtente = 0;
            for (let i = 0; i < datoDiAppoggio; i++) {
                this.isLoading = true
                // CHIAMATA axios
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result)
                    let dati = result.data
                    console.log(dati)
                    this.email.push(dati.response);
                    if (this.email.length == datoDiAppoggio) {
                        this.isLoading = false
                    }
                })
            }
        }
    },
    mounted() {
        console.log('app vue montanta correttamente')

        // for (let i = 0; i < 10; i++) {
        //     this.generaEmail()
        // }
    }
},

).mount('#app')