import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';
import CompanyLogo from '../CompanyLogo';
import SquareParallax from '../Parallax/SingleSquare';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './testi-style';

const testiContent = [
	{
		text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
		avatar: imgAPI.avatar[1],
		name: 'Harsh',
		title: 'Chief Digital Officer',
		rating: 4,
	},
	{
		text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
		avatar: imgAPI.avatar[1],
		name: 'Harsh',
		title: 'Chief Digital Officer',
		rating: 4,
	},
	{
		text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
		avatar: imgAPI.avatar[1],
		name: 'Harsh',
		title: 'Chief Digital Officer',
		rating: 4,
	},
];

function Testimonials(props) {
	// Theme breakpoints
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const classes = useStyle();

	// Carousel Setting
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		arrows: false,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	// Translation function
	const { t } = props;

	// Carousel
	const slider = useRef(null);
	useEffect(() => {
		if (theme.direction === 'ltr' && window.innerWidth > 1279) {
			const limit = window.innerWidth > 1400 ? 3 : 2;
			const lastSlide = Math.floor(testiContent.length - limit);
			slider.current.slickGoTo(lastSlide);
		}
	}, []);

	return (
		<div className={classes.root}>
			<SquareParallax />
			<div className={classes.carousel}>
				<Carousel ref={slider} {...settings}>
					{isDesktop && (
						<div className={classes.item}>
							<div className={classes.itemPropsFirst} />
						</div>
					)}
					<h2>
						Our work is our passion. See what we've created for our happy
						clients.
					</h2>
					{/* uncomment this line for client testimonial */}
					{/* {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <TestimonialCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))} */}
					{isDesktop && (
						<div className={classes.item}>
							<div className={classes.itemPropsLast} />
						</div>
					)}
				</Carousel>
			</div>
			<div className={classes.floatingTitle}>
				<Container fixed>
					<div className={classes.title}>
						<TitleIcon
							text={t('common:agency-landing.testimonial_title')}
							icon="format_quote"
						/>
					</div>
				</Container>
			</div>
			{/* <CompanyLogo /> */}
		</div>
	);
}

Testimonials.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(Testimonials);
