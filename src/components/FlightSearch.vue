<template>
  <div class="center">
    <a-row style="margin-top: 200px">
      <a-form-model :model="searchForm">
        <a-form-model-item label="Origin">
          <a-select v-model="searchForm.origin" allowClear>
            <a-select-option v-for="item in filteredOrigins" :key="item.key">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Departure">
          <a-date-picker
            v-model="searchForm.departure"
            :disabled-date="disabledDate"
            style="width: 100%"
          />
        </a-form-model-item>
        <a-form-model-item label="Destination">
          <a-select v-model="searchForm.destination" allowClear>
            <a-select-option
              v-for="item in filteredDestinations"
              :key="item.key"
            >
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Return">
          <a-date-picker
            v-model="searchForm.return"
            :disabled-date="disabledDate"
            style="width: 100%"
          />
        </a-form-model-item>
        <a-form-model-item label="Cabin Type">
          <a-select v-model="searchForm.cabinType" allowClear>
            <a-select-option value="economy"> Economy </a-select-option>
            <a-select-option value="business"> Business </a-select-option>
            <a-select-option value="firstClass"> First Class </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" @click="onSearch" :disabled="disabledSubmit">
            Search
          </a-button>
          <a-button @click="resetForm" style="margin-left: 10px">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-row>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "FlightSearch",
  props: {},
  components: {},
  computed: {
    disabledSubmit() {
      return !(
        this.searchForm &&
        this.searchForm.origin &&
        this.searchForm.departure &&
        this.searchForm.destination &&
        this.searchForm.return &&
        this.searchForm.cabinType
      );
    },
    filteredDestinations() {
      return this.airportOptions.filter((item) => {
        let origin = this.searchForm && this.searchForm.origin;
        if (item.key === origin) {
          return false;
        }
        return true;
      });
    },
    filteredOrigins() {
      return this.airportOptions.filter((item) => {
        let destination = this.searchForm && this.searchForm.destination;
        if (item.key === destination) {
          return false;
        }
        return true;
      });
    },
  },
  data() {
    return {
      searchForm: {
        requestId: "1234",
        origin: null,
        departure: null,
        destination: null,
        return: null,
        cabinType: null,
      },
      airportOptions: [
        { key: "JFK", label: "John F Kennedy" },
        { key: "ORD", label: "O'hare" },
        { key: "LAX", label: "Los Angeles" },
      ],
    };
  },
  created() {
    if (this.searchForm) {
      this.searchForm.origin = this.getOrigin();
      this.searchForm.departure = this.getDeparture();
      this.searchForm.destination = this.getDestination();
      this.searchForm.return = this.getReturn();
      this.searchForm.cabinType = this.getCabinType();
    }
  },
  methods: {
    moment,
    ...mapMutations([
      "setRequestId",
      "setOrigin",
      "setDeparture",
      "setDestination",
      "setReturn",
      "setCabinType",
    ]),
    ...mapGetters([
      "getRequestId",
      "getOrigin",
      "getDeparture",
      "getDestination",
      "getReturn",
      "getCabinType",
    ]),
    onSearch() {
      //requirements ask to emit this event, but i don't use it. using vuex instead.
      this.$emit("flight-search-request", this.searchForm);
      this.setSearchValuesInStore();
      this.$router.push({ path: "/flightResult" });
    },
    setSearchValuesInStore() {
      let requestId = this.searchForm && this.searchForm.requestId;
      let origin = this.searchForm && this.searchForm.origin;
      let departure = this.searchForm && this.searchForm.departure;
      let destination = this.searchForm && this.searchForm.destination;
      let returnDate = this.searchForm && this.searchForm.return;
      let cabinType = this.searchForm && this.searchForm.cabinType;
      this.setRequestId(requestId);
      this.setOrigin(origin);
      this.setDeparture(departure);
      this.setDestination(destination);
      this.setReturn(returnDate);
      this.setCabinType(cabinType);
    },
    disabledDate(current) {
      // Can not select days before today
      return current && current < moment().startOf("day") - 1;
    },
    resetForm() {
      if (this.searchForm) {
        this.searchForm.origin = null;
        this.searchForm.departure = null;
        this.searchForm.destination = null;
        this.searchForm.return = null;
        this.searchForm.cabinType = null;
      }
    },
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
}
</style>
