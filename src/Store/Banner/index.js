import * as firebase from "firebase";

/* eslint-disable */

export default {
  state: {
    loadedBannerContent: {},
    loadedContactContent: {},
  },
  mutations: {
    setloadedBannerContent(state, payload) {
      state.loadedBannerContent = payload;
    },
    setloadedContactContent(state, payload) {
      state.loadedContactContent = payload;
    },
  },
  actions: {
    loadBannerContent({ commit }) {
      firebase
        .database()
        .ref("bannerContent")
        .once("value")
        .then((data) => {
          const bannerObj = data.val();
          commit("setloadedBannerContent", bannerObj);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadContactContent({ commit }) {
      firebase
        .database()
        .ref("contactContent")
        .once("value")
        .then((data) => {
          const contactObj = data.val();
          commit("setloadedContactContent", contactObj);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    loadedBannerContent(state) {
      return state.loadedBannerContent;
    },
    loadedContactContent(state) {
      return state.loadedContactContent;
    },
  },
};
