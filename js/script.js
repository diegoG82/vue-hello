// INIZIALIZZO VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      //   SEMPLICE MESSAGGIO
      message: "Hello Vue!",
      //   INSERIMENTO IMMAGINE
      logovueimg:
        "https://css-tricks.com/wp-content/uploads/2020/06/vue-glowing.png",
    };
  },
  //   METHODS AND EVENT HANDLING
}).mount("#app");

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
