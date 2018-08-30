import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
	<header>
		<div className='header_test'>
			{title}
		</div>
	</header>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;