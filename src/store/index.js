import {createStore} from "redux";
import TodoReducer from "../reducers/todo";
export default function(){
	return createStore(TodoReducer);
}