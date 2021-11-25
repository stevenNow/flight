import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    requestId: null,
    origin: null,
    departure: null,
    destination: null,
    return: null,
    cabinType: null,
  },
  getters: {
    getRequestId: (state) => state.requestId,
    getOrigin: (state) => state.origin,
    getDeparture: (state) => state.departure,
    getDestination: (state) => state.destination,
    getReturn: (state) => state.return,
    getCabinType: (state) => state.cabinType,
  },
  mutations: {
    setRequestId(state, requestId) {
      state.requestId = requestId;
    },
    setOrigin(state, origin) {
      state.origin = origin;
    },
    setDeparture(state, departure) {
      state.departure = departure;
    },
    setDestination(state, destination) {
      state.destination = destination;
    },
    setReturn(state, returnTime) {
      state.return = returnTime;
    },
    setCabinType(state, cabinType) {
      state.cabinType = cabinType;
    },
  },
  actions: {},
  modules: {},
});
