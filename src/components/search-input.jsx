import React from 'react';

export const SearchInput = (props) => {

	return (
		<input
			className="search-input"
			placeholder="Enter search text"
			value = {props.text}
		/>
	)
};
