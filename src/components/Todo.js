import React, {PropTypes } from 'react';

var Todo = (props) =>{
  var styles= {
    textDecoration: props.completed ? 'line-through' : 'none',
    cursor: props.completed ? 'default' : 'pointer'
  }

  return (
    <li onClick={props.onClick} style={styles}>
      {props.text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;