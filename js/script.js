// INIZIALIZZO VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      
      //   SEMPLICE MESSAGGIO
      message: "Hello Vue!",

      // CAMPO VUOTO PER L'IMPUT
      nameImput: "",

      //   INSERIMENTO IMMAGINE
      logovueimg:
        "https://css-tricks.com/wp-content/uploads/2020/06/vue-glowing.png",

      // INTERFACCIA CLASSE VUE CON CSS
      imgclass: "imgwidth",
      hiddenClass: "hidden",
    };
  },

  //   METHODS AND EVENT HANDLING
  methods: {
    hiddenText() {
      if (this.hiddenClass === "") {
        this.hiddenClass = "hidden";
      } else {
        this.hiddenClass = "";
      }
    },
  },
}).mount("#app");
