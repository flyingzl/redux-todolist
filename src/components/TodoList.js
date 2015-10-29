import React, {PropTypes} from 'react';
import Todo from "./Todo";

var TodoList = (props)=>{
	var arrays = [];
	props.todos.map( (todo, index) =>{
		var key = "todo-" + index;
		arrays.push(
			<Todo {...todo}  
				key={"todo-" + key }
				onClick={ ()=> props.onTodoClick(index) } />
		);
	});

	return(
		<ul>
			{arrays}
		</ul>
	)
}


export default TodoList;