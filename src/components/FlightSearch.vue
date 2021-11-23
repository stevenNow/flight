<template>
  <div class="center">
    <a-row style="margin-top: 200px">
      <a-input-search allowClear placeholder="Search" @search="onSearch" />
      <a-spin v-if="searching" tip="Searching..." class="center"></a-spin>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "FlightSearch",
  props: {},
  components: {
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onSearch(val) {
        this.searchTerm = val;
        this.$emit("flight-search-request", val);
        this.$router.push({path: "/flightResult"});
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
