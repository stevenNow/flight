import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import FlightSearch from "../../../src/components/FlightSearch";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Antd);

describe("FlightSearch Test", () => {
  let getters;
  let mutations;
  let store;

  beforeEach(() => {
    getters = {
      getOrigin: jest.fn(),
      getDeparture: jest.fn(),
      getDestination: jest.fn(),
      getReturn: jest.fn(),
      getCabinType: jest.fn()
    };

    mutations = {};

    store = new Vuex.Store({
      getters,
      modules: {},
      state: {},
      mutations,
    });
  });

  it("Tests FlightSearch Functions", async () => {
    const wrapper = mount(FlightSearch, {
      store,
      localVue,
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
    //test disabledSubmit
    expect(FlightSearch.computed.disabledSubmit.call(wrapper.vm)).toBeTruthy();
    wrapper.vm.searchForm.origin = "LAX";
    expect(FlightSearch.computed.disabledSubmit.call(wrapper.vm)).toBeTruthy();
    //test filteredDestinations
    expect(FlightSearch.computed.filteredDestinations.call(wrapper.vm))
        .toStrictEqual([{key: "JFK", label: "John F Kennedy"},
      {key: "ORD", label: "O'hare"}]);
    wrapper.vm.searchForm.departure = "1/1/2022";
    wrapper.vm.searchForm.destination = "ORD";
    //test filteredOrigins
    expect(FlightSearch.computed.filteredOrigins.call(wrapper.vm))
        .toStrictEqual([{key: "JFK", label: "John F Kennedy"},{key: "LAX", label: "Los Angeles"}
          ]);
    wrapper.vm.searchForm.return = "1/2/2022";
    wrapper.vm.searchForm.cabinType = "fancy";
    expect(FlightSearch.computed.disabledSubmit.call(wrapper.vm)).toBeFalsy();
    //test reset
    wrapper.vm.resetForm();
    expect(wrapper.vm.searchForm.origin).toBeNull();
    expect(wrapper.vm.searchForm.departure).toBeNull();
    expect(wrapper.vm.searchForm.destination).toBeNull();
    expect(wrapper.vm.searchForm.return).toBeNull();
    expect(wrapper.vm.searchForm.cabinType).toBeNull();
  });
});