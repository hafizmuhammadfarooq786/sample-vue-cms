import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBsfaPAHxsnaplTXwSd2xmrEDTGYlj7rgc",
      authDomain: "cms-mike.firebaseapp.com",
      databaseURL: "https://cms-mike-default-rtdb.firebaseio.com/",
      projectId: "cms-mike",
      storageBucket: "cms-mike.appspot.com",
      messagingSenderId: "889595033124",
      appId: "1:889595033124:web:c12adf5cefa1431288cab1",
      measurementId: "G-GHHYCGF806",
    });

    this.$store.dispatch("loadBannerContent");
    this.$store.dispatch("loadContactContent");
  },
}).$mount("#app");
