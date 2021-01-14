import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    stepOne: {
      fileFormat: null
    },
    stepTwo: {
      fileUploaded: null,
      nameCard: null,
      tag: null,
    },
    stepThree: {
      triggerType: null,
      dateUptade: null
    }

  },
  mutations: {
    ADD_STEP_ONE(state, stepOne){
      state.stepOne = stepOne
      console.log(state.stepOne)
    },
    ADD_STEP_TWO(state, stepTwo){
      state.stepTwo = stepTwo
      console.log(state.stepTwo)
    },
    ADD_STEP_THREE(state, stepThree){
      state.stepThree = stepThree
      console.log(state.stepThree)
    }
  },
  
  actions: {
    addStepOne({commit}, stepOne){
      commit("ADD_STEP_ONE", stepOne)
    },
    addStepTwo({commit}, stepTwo){
      commit("ADD_STEP_ONE", stepTwo)
    },
    addStepThree({commit}, stepThree){
      commit("ADD_STEP_ONE", stepThree)
    }
  },
  modules: {
  }
})
