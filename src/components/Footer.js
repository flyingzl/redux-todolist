import React, {PropTypes} from 'react';
import {
	VisibleFilters
} from "../constants/todo";

var Footer = (props) =>{

	var doFilter = (filter, evt)=> {
		evt.preventDefault();
		props.onFilterChange(filter);
	}

	var renderFilter = (filter, name) =>{
		if( filter == props.filter ){
			return name ;
		}
		return (
			<a href="#" onClick={doFilter.bind(null, filter)}>
				{name}
			</a>
		);
	}

	return (
		<p>
			Show: {' '}
			{renderFilter(VisibleFilters.SHOW_ALL, 'ALL')} {' '}
			{renderFilter(VisibleFilters.SHOW_COMPLETED, 'Completed')} {' '}
			{renderFilter(VisibleFilters.SHOW_ACTIVE, 'Active')} {' '}

		</p>
	);
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired
}

export default Footer;