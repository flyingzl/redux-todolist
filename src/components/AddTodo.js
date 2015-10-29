import React, {PropTypes} from 'react';

var AddTodo = React.createClass({
	render(){
		return (
			<div>
				<input ref="text" />
				<button onClick={this.handleClick}> Add</button>
			</div>
		)
	},

	handleClick(){
		var node = this.refs.text;
		this.props.onAddClick(node.value.trim());
		node.value= "";
	}
});

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo;