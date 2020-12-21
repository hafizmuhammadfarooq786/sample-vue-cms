import Vue from "vue";
import Vuex from "vuex";

import Banner from "./Store/Banner/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner: Banner,
  },
});
