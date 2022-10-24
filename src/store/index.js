import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    dsPhaseItems: [],
    modelSelOption: [],
    counter: 3
  },
  mutations: {
    SET_PHASE_ITEMS(state, payload) {
      state.dsPhaseItems = payload;
      console.log("In SET_PHASE_ITEMS" + state.dsPhaseItems);
    }, // SET_SELOPTIONS
    SET_SELECTEDOPTIONS(state, payload) {
      state.modelSelOption = payload;
      console.log(
        "In SET_SELECTEDOPTIONS" + JSON.stringify(state.modelSelOption)
      );
    } // SET_SELECTEDOPTIONS
  },
  getters: {
    getPhaseItems: (state) => state.dsPhaseItems,
    getSelectedSelOption: (state) => state.modelSelOption
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }, //

    async fetchPhaseItems({ commit }) {
      try {
        const data = await axios.get(
          "https://my-json-server.typicode.com/codegenx/my-json-server/myselectoptions"
        );
        commit("SET_PHASE_ITEMS", data.data);
        // Below use parent foreign key to loookup records from the API request response.
        this.state.modelSelOption = this.state.dsPhaseItems.find(
          (item) => item.id === 3
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }, //

    setSelOption({ commit }, payload) {
      commit("SET_SELECTEDOPTIONS", payload);
    }
  }
});
