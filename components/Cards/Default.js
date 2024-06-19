import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './cards-style';

function Services(props) {
	const classes = useStyles();
	// const settings = {
	//   dots: false,
	//   infinite: false,
	//   speed: 500,
	//   slidesToShow: 4,
	//   arrows: false,
	//   slidesToScroll: 1,
	//   variableWidth: true,
	//   responsive: [{
	//     breakpoint: 1100,
	//     settings: {
	//       slidesToShow: 3,
	//     }
	//   }, {
	//     breakpoint: 800,
	//     settings: {
	//       slidesToShow: 2,
	//     }
	//   }, {
	//     breakpoint: 600,
	//     settings: {
	//       slidesToShow: 1,
	//     }
	//   }]
	// };
	const { img, title, desc, button, btnLink } = props;
	return (
		<Paper className={classes.defaultCard}>
			<figure>
				<img src={img} alt="img" />
			</figure>
			<div className={classes.text}>
				<Typography display="block" variant="h6">
					{title}
				</Typography>
				<Typography component="p">{desc}</Typography>
			</div>
			<Button
				href={btnLink}
				target="_blank"
				variant="outlined"
				fullWidth
				color="primary"
				className={classes.button}
			>
				{button}
			</Button>
		</Paper>
	);
}

Services.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	button: PropTypes.string.isRequired,
	btnLink: PropTypes.string.isRequired,
	// settings: PropTypes.string.isRequired,
};

export default Services;
