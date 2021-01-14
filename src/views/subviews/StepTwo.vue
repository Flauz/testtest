<template>
  <v-stepper-content step="2">
    <h2>Renseignez la carte</h2>
    <v-card class="align-center" color="grey lighten-1" height="60vh">
      <div>
        <!-- <Dropzone /> -->
        <div>
          <h3>Donner un nom à votre carte</h3>
          <v-text-field label="Solo" solo></v-text-field>
        </div>
        <div>
          <h3>Ajouter des étiquettes d'équipe</h3>
          <v-autocomplete
            v-model="values"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Outlined"
            multiple
          ></v-autocomplete>
        </div>
      </div>
    </v-card>

    <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

    <v-btn text> Cancel </v-btn>
  </v-stepper-content>
</template>
<script>
import Dropzone from "../components/Dropzone.vue";
export default {
  name: "StepTwo",
  components: {
    Dropzone,
  },
  data() {
    return {
      items: ["foo", "bar", "fizz", "buzz"],
      value: null,
    };
  },
};
</script>