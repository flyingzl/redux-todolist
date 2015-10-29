import {combineReducers} from "redux";
import {
	ADD_TODO,
	COMPLETE_TODO,
	SET_VISIBILITY_FILTER,
	VisibleFilters
} from "../constants/todo";

// state结构
// {
// 	visibleFilter: "SHOW_ALL", 
// 	todos: [{
// 		text: "",
// 		completed: false
// 	}]
// }


const {SHOW_ALL} = VisibleFilters;


var visibleFilter = (state= SHOW_ALL, action) =>{
	if( action.type == SET_VISIBILITY_FILTER ){
		return action.filter;
	}
	return state;
}

var todos = (state=[{text:"first", completed:false}], action) => {
	var index = action.index;
	switch(action.type){
		case ADD_TODO:
			return [...state, {text: action.text, completed: false}];
		case COMPLETE_TODO:
			return [
				...state.slice(0, index),
				Object.assign({}, state[index], {completed:true}),
				...state.slice(index+1)
			]
		default:
			return state;
	}
}

export default combineReducers({visibleFilter, todos})