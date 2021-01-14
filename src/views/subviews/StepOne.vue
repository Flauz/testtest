<template>
  <v-stepper-content step="1">
    <h2>Selectionner le format d'entée</h2>

    <v-card
      class="d-flex justify-space-around align-center"
      color="grey lighten-1"
      height="50vh"
    >
      <v-radio-group row v-model="row">
        <v-card width="50px" height="50px" color="grey lighten-6"
          ><v-radio></v-radio>
        </v-card>
        <v-card width="50px" height="50px" color="grey lighten-6"
          ><v-radio></v-radio
        ></v-card>
        <v-card width="50px" height="50px" color="grey lighten-6"
          ><v-radio></v-radio
        ></v-card>
      </v-radio-group>
    </v-card>

    <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

    <v-btn text> Cancel </v-btn>
  </v-stepper-content>
</template>
<script>
export default {
  name: "StepOne",
  data: function () {
    return {};
  },
};
</script>