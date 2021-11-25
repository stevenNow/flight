import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import Antd from "ant-design-vue";
import FlightResult from "../../../src/views/FlightResult";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Antd);
jest.useFakeTimers();

describe("FlightResult Test", () => {

    it("Tests FlightResult", async () => {
        const wrapper = mount(FlightResult, {
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
        expect(wrapper.vm.searching).toBeTruthy();
        expect(wrapper.vm.results).toBeNull();
        jest.advanceTimersByTime(501);
        expect(wrapper.vm.searching).toBeFalsy();
        expect(wrapper.vm.results).toStrictEqual(
            [
                {
                    "origin": "LAX",
                    "destination": "JFK",
                    "departure": "02-22-2022T07:35:00",
                    "arrival": "02-22-2022T12:50:00",
                    "cabinType": "economy",
                    "fare": "995.00"
                },
                {
                    "origin": "LAX",
                    "destination": "JFK",
                    "departure": "02-22-2022T07:50:00",
                    "arrival": "02-22-2022T13:20:00",
                    "cabinType": "economy",
                    "fare": "990.00"
                },
                {
                    "origin": "LAX",
                    "destination": "JFK",
                    "departure": "02-22-2022T07:25:00",
                    "arrival": "02-22-2022T12:30:00",
                    "cabinType": "economy",
                    "fare": "1025.00"
                }
            ]
        )

    });
});