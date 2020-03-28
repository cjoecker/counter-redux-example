import {Action, applyMiddleware, combineReducers, compose, createStore,} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {Counter_Reducer, CounterState} from "./Counter_Reducer";
import {FunFact_Reducer, FunFactState} from "./FunFact_Reducer";


const rootReducer = combineReducers({
    Counter: Counter_Reducer,
    FunFact: FunFact_Reducer
});

interface rootState extends
    CounterState,
    FunFactState
{}





export interface DispatchAction extends Action {
    payload: Partial<rootState>;
}

const middleware = thunk as ThunkMiddleware<rootState, DispatchAction>;

const ReduxDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    rootReducer,
    compose(applyMiddleware(middleware),ReduxDevTools)
);








