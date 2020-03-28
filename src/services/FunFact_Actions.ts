import {ThunkAction} from "redux-thunk";
import {Action, Dispatch} from "redux";
import axios, { AxiosError } from "axios";
import {FunFactState} from "./FunFact_Reducer";


export enum FunFactActionTypes {
	SetFunFact = "SetFunFact",
}

export const getFunFact = (number:Number): ThunkAction<void, FunFactState, null, Action<string>> => async dispatch => {

	await dispatch({
		type: FunFactActionTypes.SetFunFact,
		payload: {funFact: "Loading..."}
	});

	axios
		.get(`http://numbersapi.com/${number}`)
		.then((answer) => {
			dispatch({
				type: FunFactActionTypes.SetFunFact,
				payload: {funFact: answer.data}
			});
		})
		.catch((error: AxiosError) => {
			dispatch({
				type: FunFactActionTypes.SetFunFact,
				payload: {funFact: `Error: ${error.response}`}
			});
		})
};