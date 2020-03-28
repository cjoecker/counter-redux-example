import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterActionTypes} from "../services/Counter_Actions";

function Counter() {

    const dispatch = useDispatch();
    const {counterNumber} = useSelector(state => state.Counter);

    return (
        <div className="App">
            <h1>{counterNumber}</h1>
            <button
                onClick={(e) => {
                    dispatch({type: CounterActionTypes.SumCounter})
                }}>
                Sum + 1
            </button>
            &nbsp;
            <button
                onClick={(e) => {
                    dispatch({type: CounterActionTypes.RestCounter})
                }}>
                Sum - 1
            </button>
        </div>
    );
}

export default Counter;
