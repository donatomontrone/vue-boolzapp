// // Milestone 1
// //Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assagnando due classi CSS diverse
// //Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// //Milestone 2
// // Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// //Click sul contatto mostra la conversazione del contatto cliccato
// //Milestone 3
// //Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// //Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// // Milestone 4
// // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// // Milestone 5 - opzionale
// // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// // Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

const { createApp } = Vue

    createApp({
        data() {
            return {
                contacts: [
                    {
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: '_2',
                        visible: true,
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: '_3',
                        visible: true,
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: '_4',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: '_5',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: '_6',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: '_7',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: '_8',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    }
                ],
                currentIndex : 0,
                newMessage : '',
                search: '',
            }
        },
        methods : {
            //Funzione per rendere attiva la chat che clicco ovvero che l'indice corrente(l'indice della chat aperta) è unguale all'index della chat che clicco
            changeActiveChat(index){
                this.currentIndex = index;
            },
            //Aggiungere un messaggio che viene immesso dall'utente. Se il messaggio non è vuoto allora pusho nell'array dell'indice selezionato un oggetto con la data tramite la funzione, il messaggio tramite l'input text e lo stato del messaggio è ovviamente sent //! In seguito ho aggiunto la funzione per la risposta automatica dopo un secondo
            //Poi ovviamente ripulisco l'input tramite una funzione apposita.
            addNewMessage(index){
                if (this.newMessage != ''){
                    this.contacts[index].messages.push({ date: this.getNowDate(), message: this.newMessage, status: 'sent'});
                    this.setReply(index);
                }
                this.clearNewMessage();
            },
            //Funziona che ripulisce l'input
            clearNewMessage(){
                this.newMessage = '';
            },
            //Funzione che attraverso il set timeout ad un secondo pusha un messaggio automatico con data tramite funzione e ovviamente lo status è impostato su ricevuto.
            setReply(index){
                setTimeout(() => {
                    this.contacts[index].messages.push({ date: this.getNowDate(), message: 'Ok!', status: 'received'});
                }, 1000);
            },
            //Funzione da usare direttamente nel vfor al posto dell'array poichè controlla, tutto in minuscolo, se il nome del contatto contiene caretteri inseriti nella search bar.
            searchBar(){
                return this.contacts.filter(contact => {
                        return contact.name.toLowerCase().includes(this.search.toLowerCase())
                })
            },
            //Utilizzo la libreria luxon e le do il formato interessato uguale a quello inserito nei dati dell'array
            getNowDate(){
                let DateTime = luxon.DateTime;
                return DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
            },
            //Dichiaro una costante e le assegno l'indice dell'ultimo messaggio
            lastMessageIndex(index){
                const lastMessage = this.contacts[index].messages.length - 1;
                return lastMessage
            },
            //Funzione per l'ultimo accesso, Se l'ultimo indice è maggiore o uguale a zero mi ritorna la data dell'ultimo messaggio, altrimenti data Easter Egg
            lastAccess(index){
                if(this.lastMessageIndex(index) >= 0){
                    return (this.contacts[index].messages[this.lastMessageIndex(index)].date);
                }else{
                    return "19/12/1994";
                }
            },
            //Funzione invece per selezionare l'ultimo messaggio, se l'ultimo indice del messaggio è maggiore o uguale a zero mi ritorna il testo dell'ultimo messaggio.
            lastMessage(index){
                if(this.lastMessageIndex(index) >= 0){
                    return (this.contacts[index].messages[this.lastMessageIndex(index)].message);
                }
            },
            //Funzione per rimuovere un messaggio,  faccio splice sull'indice attivo per eleminare il messaggio selezionato se ovviamente il messaggio è presente (sempre tramite il controllo dell'indice dell'utlimo messaggio)
            removeMessage(index, activeIndex){
                if(this.lastMessageIndex(index) >= 0){
                    return this.contacts[activeIndex].messages.splice(index, 1)
                }
            }
        }
}).mount('#app')