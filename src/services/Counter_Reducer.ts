import {Reducer} from "redux";
import {DispatchAction} from "./store";
import {CounterActionTypes} from "./Counter_Actions";

export class CounterState {
    counterNumber: number = 0;
}

export const Counter_Reducer: Reducer<CounterState, DispatchAction> = (state = new CounterState(), action) => {
    switch (action.type) {
        case CounterActionTypes.SumCounter:
            return {
                ...state,
                counterNumber: state.counterNumber + 1,
            };
        case CounterActionTypes.RestCounter:
            return {
                ...state,
                counterNumber: state.counterNumber - 1,
            };
        default:
            return state;
    }
};

