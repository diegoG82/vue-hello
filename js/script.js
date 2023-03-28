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
      
        nameImput: "",
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
