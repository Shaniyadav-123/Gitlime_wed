import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FilterFirstWord({ sentence }) {
	const [filteredWord, setFilteredWord] = useState('');

	useEffect(() => {
		setFilteredWord(sentence.split(' ')[0]);
	}, [sentence]);

	return (
		<>
			<span className="highlight">{filteredWord}</span>
			<span>{sentence.split(' ').slice(1).join(' ')}</span>
		</>
	);
}
FilterFirstWord.propTypes = {
	sentence: PropTypes.string.isRequired,
};

export default FilterFirstWord;
