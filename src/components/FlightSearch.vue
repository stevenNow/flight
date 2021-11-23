<template>
  <div class="center">
    <a-row style="margin-top: 200px">
      <a-form-model :model="searchForm">
        <a-form-model-item label="Request Id">
          <a-input v-model="searchForm.requestId"></a-input>
        </a-form-model-item>
        <a-form-model-item label="Origin">
          <a-select v-model="searchForm.origin">
            <a-select-option value="LAX">
              Los Angeles
            </a-select-option>
            <a-select-option value="ORD">
              O'hare
            </a-select-option>
            <a-select-option value="JFK">
              John F Kennedy
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Departure">
          <a-date-picker v-model="searchForm.departure" :disabled-date="disabledDate" />
        </a-form-model-item>
        <a-form-model-item label="Destination">
          <a-select  v-model="searchForm.destination">
            <a-select-option value="LAX">
              Los Angeles
            </a-select-option>
            <a-select-option value="ORD">
              O'hare
            </a-select-option>
            <a-select-option value="JFK">
              John F Kennedy
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Return">
          <a-date-picker v-model="searchForm.return" :disabled-date="disabledDate" />
        </a-form-model-item>
        <a-form-model-item label="Cabin Type">
          <a-select v-model="searchForm.cabinType">
            <a-select-option value="economy">
              Economy
            </a-select-option>
            <a-select-option value="business">
              Business
            </a-select-option>
            <a-select-option value="firstClass">
              First Class
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item  :wrapper-col="{ span: 4 }">
          <a-button type="primary" @click="onSearch" :disabled="disabledForm">
            Search
          </a-button>
          <a-button  @click="resetForm" style="margin-left:10px;">
            Reset
          </a-button>
          </a-form-model-item>
      </a-form-model>
    </a-row>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import moment from "moment"
export default {
  name: "FlightSearch",
  props: {},
  components: {
  },
  computed: {
    disabledForm() {
      return !(
          this.searchForm.requestId && this.searchForm.origin && this.searchForm.departure
          && this.searchForm.destination && this.searchForm.return && this.searchForm.cabinType
      )
    }
  },
  data() {
    return {
      searchForm: {
        requestId: null,
        origin: null,
        departure: null,
        destination: null,
        return: null,
        cabinType: null
      },
    };
  },
  methods: {
    moment,
    ...mapMutations([
        "setRequestId", "setOrigin", "setDeparture", "setDestination", "setReturn", "setCabinType"
    ]),
    onSearch(val) {
        this.searchTerm = val;
        //requirements ask to emit this event, but i don't use it. using vuex instead.
        this.$emit("flight-search-request", this.searchForm);
        this.$router.push({path: "/flightResult"});
    },
    changeDeparture(date, dateString) {
      this.searchForm.departure = dateString;
    },
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().startOf('day') -1;
    },
    resetForm() {
      this.searchForm.requestId = null;
      this.searchForm.origin = null;
      this.searchForm.departure = null;
      this.searchForm.destination = null;
      this.searchForm.return = null;
      this.searchForm.cabinType = null;
    }
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
}
</style>
