import React from "react";
import {connect} from "react-redux";
import * as todoActions from "../actions/todo";

import AddTodo from "../components/AddTodo";
import TodoList from  "../components/TodoList";
import Footer from "../components/Footer";

import {VisibleFilters} from "../constants/todo";


var selectTodos = (todos, filter) =>{
	switch(filter){
		case VisibleFilters.SHOW_ALL:
			return todos;
		case VisibleFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
		case VisibleFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
	}
}


var select = (state) => {
	return{
		todos: selectTodos(state.todos, state.visibleFilter),
		filter: state.visibleFilter
	}
}


var App = React.createClass({

	onAddClick(text){
		this.props.dispatch(todoActions.addTodo(text));
	},

	onTodoClick(index){
		this.props.dispatch(todoActions.completeTodo(index));
	},

	onFilterChange(filter){
		this.props.dispatch(todoActions.setVisibilityFilter(filter));
	},

	render(){
		const { todos, filter } = this.props;
		return(
			<div>
				<AddTodo onAddClick={this.onAddClick} />
				<TodoList todos={todos}
					onTodoClick={this.onTodoClick} />
				<Footer filter={filter} 
					onFilterChange={this.onFilterChange} />
			</div>
		);
	}

});

export default connect(select)(App);