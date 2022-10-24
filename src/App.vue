<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        Counter: {{ $store.state.counter }}
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div id="phase_ukey_sel">
        <v-flex xs12 sm6 d-flex>
          <v-select
            v-model="selectedSelOption"
            :items="getPhaseItems"
            label="Select an Option"
            item-value="id"
            item-text="text"
            item-key="getPhaseItems"
            return-object
            @change="onChangeSelectedOption"
          ></v-select>
        </v-flex>
      </div>

      <div>
        <h1>{{ selectedItem }}</h1>
        <h1>{{ msg }}</h1>
      </div>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",

  components: {
    //HelloWorld,
  },

  data: () => ({
    msg: "Welcome to my Vuex Store",
  }), // data

  computed: {
    selectedSelOption() {
      return this.$store.getters.getSelectedSelOption;
    }, //selectedItems()

    getPhaseItems() {
      // get{entity name}Items
      return this.$store.getters.getPhaseItems;
    },

    selectedItem() {
      return (
        "Selected ID: " +
        this.$store.getters.getSelectedSelOption["id"] +
        " Name:" +
        this.$store.getters.getSelectedSelOption["text"]
      );
      // return this.$store.state.selectedItem.selectedItem;
    }, //selectedItems()
  },
  methods: {
    onChangeSelectedOption(val) {
      console.log("In app.selectedOption" + JSON.stringify(val));
      this.$store.dispatch("setSelOption", val);
    }, //
  }, // methods

  mounted() {
    // dispatch the fetch APIs action which commits a mutation to update the state.
    console.log("onMounted !!!");
    // this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchPhaseItems");
  },
}; // default
</script>
