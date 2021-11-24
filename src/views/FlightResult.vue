<template>
  <div class="center" style="margin-top:200px">
    <a-row>
      <a-col span="12"><h1>Search results</h1></a-col>
      <a-col offset="8" span="4"><a-button @click="backToSearch">Back</a-button></a-col>
    </a-row>
    <a-spin size="large" v-if="searching" class="spinner"></a-spin>
  <div v-for="(item, index) in results" :key="index" >
    <a-descriptions :title="'Flight ' + index + ' for $' + item.fare" class="searchListItem">
      <a-descriptions-item label="Origin">
        {{ item.origin }}
      </a-descriptions-item>
      <a-descriptions-item label="Departure">
        {{ item.departure }}
      </a-descriptions-item>
      <a-descriptions-item label="Destination">
        {{ item.destination }}
      </a-descriptions-item>
      <a-descriptions-item label="Arrival">
        {{ item.arrival }}
      </a-descriptions-item>
      <a-descriptions-item label="Cabin Type">
        {{ item.cabinType }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
  </div>
</template>

<script>

export default {
  name: "FlightResult",
  components: {},
  created() {
    setTimeout(() => {
      const data = require("../data/flightResults.json");
      this.results = data;
      this.searching = false;
    }, 500)
  },
  data() {
    return {
      results: null,
      searching: true
    };
  },
  methods: {
    backToSearch() {
      this.$router.push({path: "/"})
    }
  }
};
</script>
<style>
.spinner {
  margin-left: 50%;
  margin-top: 100px;
}
.searchListItem {
  padding: 25px;
}
.searchListItem:hover {
  cursor: pointer;
  box-shadow: 0 0rem 0.5rem rgba(0, 0, 0, 0.15);
}
</style>