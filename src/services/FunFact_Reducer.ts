import {Reducer} from "redux";
import {DispatchAction} from "./store";
import {FunFactActionTypes} from "./FunFact_Actions";
import {CounterActionTypes} from "./Counter_Actions";
import {CounterState} from "./Counter_Reducer";

export class FunFactState {
    funFact: string = "";
}


export const FunFact_Reducer: Reducer<FunFactState, DispatchAction> = (state = new FunFactState(), action) => {
    switch (action.type) {
        case FunFactActionTypes.SetFunFact:
            return {
                ...state,
                funFact: action.payload.funFact || '',
            };
        default:
            return state;
    }
};