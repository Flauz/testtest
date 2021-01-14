<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Etape 1 </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Etape 2 </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Etape 3 </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-form>
          <v-container>
            <h2>Selectionner le format d'entée</h2>

            <v-card
              class="d-flex justify-space-around align-center"
              color="grey lighten-1"
              height="50vh"
            >
              <v-radio-group row v-model="type" required>
                <v-card width="50px" height="50px" color="grey lighten-6"
                  ><v-radio value="file"></v-radio>
                  <p>Fichier</p>
                </v-card>
                <v-card
                  disabled
                  width="50px"
                  height="50px"
                  color="grey lighten-6"
                  value="App"
                  ><v-radio></v-radio>
                  <p>App</p>
                </v-card>
                <v-card
                  disabled
                  width="50px"
                  height="50px"
                  color="grey lighten-6"
                  ><v-radio :type="api"></v-radio>
                  <p>Api</p>
                </v-card>
              </v-radio-group>
              <v-btn v-on:click="testValue">click</v-btn>
            </v-card>
          </v-container>
          <v-btn :disabled="!type" color="primary" @click="submitStepOne">
            Continue
          </v-btn>
          <v-btn> Cancel </v-btn>
          <v-btn v-on:click="testValue">tesst</v-btn>
        </v-form>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container>
          <h2>Renseignez la carte</h2>

          <v-card class="align-center" color="grey lighten-1" height="60vh">
            <div>
              <dropzone
                @addFile="
                  (fileUploaded) => {
                    stepTwo.fileUploaded = fileUploaded;
                  }
                "
              />

              <div>
                <h3>Donner un nom à votre carte</h3>
                <v-text-field
                  v-model="nameCard"
                  label="Nom de la carte"
                  solo
                  v-on:change="testValue"
                  required
                ></v-text-field>
              </div>
              <div>
                <h3>Ajouter des étiquettes d'équipe</h3>
                <v-autocomplete
                  v-model="tag"
                  :items="itemsStepTwo"
                  outlined
                  dense
                  chips
                  small-chips
                  label="Outlined"
                  multiple
                ></v-autocomplete>
              </div>
              <v-btn v-on:click="testValue">click</v-btn>
            </div>
          </v-card>
        </v-container>
        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
        <v-btn @click="el = 1"> Cancel </v-btn>
        <v-btn>tesst</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container
          ><h2>Selectionner le déclencheur</h2>
          <v-card class="mb-12" color="grey lighten-1" height="60vh">
            <h4>
              Choisissez le type de déclencheur pour mettre à jour les données
            </h4>
            <div>
              <v-select
                v-model="triggerType"
                :items="itemsStepThree"
                filled
                label="Filled style"
              ></v-select>
            </div>
            <div class="d-flex flex-column">
              <h4 class="justify-center">
                Choisissez la date de mise à jour attendue
              </h4>
              <div class="justify-center">
                <v-date-picker v-model="picker"></v-date-picker>
              </div>
            </div>
            <v-btn v-on:click="testValue">click</v-btn></v-card
          ></v-container
        >
        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
        <v-btn @click="el = 2"> Cancel </v-btn>
        <v-btn>tesst</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Dropzone from "../components/Dropzone.vue";

export default {
  components: {
    Dropzone,
  },
  data() {
    return {
      e1: 1,
      file: "file",
      app: "app",
      api: "api",
      itemsStepTwo: ["logistique", "production", "qualité", "maintenance"],
      itemsStepThree: ["Manuel", "Action prédéfinie", "Calendaire"],
      tag: null,
      nameCard: null,
      type: null,
      picker: new Date().toISOString().substr(0, 10),
      triggerType: null,
      validStepOne: true,
      validStepTwo: true,
      validStepThree: true,

      ///

      stepOne: {
        fileFormat: null,
      },
      stepTwo: {
        fileUploaded: null,
        nameCard: null,
        tag: null,
      },
      stepThree: {
        triggerType: null,
        dateUptade: null,
      },
    };
  },
  methods: {
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
    testValue: function () {
      console.log(
        "Helloo :",
        this.valueStepOne,
        this.valueStepTwo,
        this.valueStepThree,
        this.picker,
        this.nameCard,
        this.type,
        this.file
      );
    },
    async submitStepOne() {
      await this.$store.dispatch("addStepOne", this.stepOne);
      this.e1 = 2;
      // this.$router.push("/steptwo");
    },
    async submitStepTwo() {
      await this.$store.dispatch("addStepTwo", this.stepTwo);
      // this.$router.push("/stepthree");
    },
    async submitStepThree() {
      await this.$store.dispatch("addStepThree", this.stepThree);
      // this.$router.push("/");
    },
  },
  computed: {
    isDisabledS1: function () {
      return !this.validStepOne;
    },
  },
};
</script>