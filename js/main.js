//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTE LE VARIABILI
            email: [],
            numeroUtente: 0,
            isLoading: false,
        }
    },
    methods: {
        // FUNZIONE PER GENERARE EMAIL TRAMITE AXIOS.GET BASATE SU UN INPUT UTENTE
        generaEmail(numero) {
            // A OGNI CLICK ELIMINO LE PRECEDENTI
            this.email = [];
            for (let i = 0; i < numero; i++) {
                this.isLoading = true
                // CHIAMATA axios
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result)
                    let dati = result.data
                    console.log(dati)
                    this.email.push(dati.response);
                    if (this.email.length == this.numeroUtente) {
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