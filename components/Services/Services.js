import React, { useEffect, useRef } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Carousel from 'react-slick';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';
// import router, { useRouter } from 'next/router';
import { withTranslation } from '~/i18n';
import imgApi from '~/public/images/imgAPI';
import useStyles from './services-style';
import TitleIcon from '../Title/WithIcon';
import Card from '../Cards/Default';
import DotsParallax from '../Parallax/Dots';

const servicesList = [
	{
		title: 'Branding',
		desc: 'What are the things we’re good at? films, advertising, photography, live stream video production, visual brand strategy, and communication design, to name a few.',
		img: imgApi.agency[0],
		btnLink: '/branding',
	},
	{
		title: 'UI/ UX design',
		desc: 'Ignite your online identity with cornerstone digital assets.Build your presence with superb designs and functionality',
		img: imgApi.agency[1],
		btnLink: '/uxdesign',
	},
	{
		title: 'Digital Marketing and Content',
		desc: 'Our digital marketing expert offers competitive & quality digital marketing services which deliver conversions via SEO, SMO, SEM & online reputation.',
		img: imgApi.agency[2],
		btnLink: '/digitalmarketing',
	},
	{
		title: 'Website development',
		desc: 'We provide best development of feature-rich web applications that rise above the essentials and work across multiple devices.',
		img: imgApi.agency[3],
		btnLink: '/websitedevelopment',
	},
	{
		title: 'Application Deployment & Maintenance ',
		desc: 'A typical application deployment process consists of several key phases. An intuitive approach to completing these steps in a synchronized fashion dictates potential deployment success.',
		img: imgApi.agency[4],
		btnLink: '/applicationdeployment',
	},
	{
		title: 'Product Design & Development',
		desc: 'Develop results-driven products for entrepreneurs, startups, and enterprises with a leading software development company.',
		img: imgApi.agency[5],
		btnLink: '/productdesign',
	},
	{
		title: 'ERP Development',
		desc: 'Every enterprise needs to develop new business models to avoid being disrupted, gain efficiencies to fund innovation, and transform mission-critical systems without business risk.',
		img: imgApi.agency[6],
		btnLink: '/erpdevelopment',
	},
];
function Services(props) {
	const { t } = props;
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const classes = useStyles();
	const slider = useRef(null);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	useEffect(() => {
		if (theme.direction === 'ltr' && window.innerWidth > 1200) {
			const limit = window.innerWidth > 1400 ? 3 : 2;
			const lastSlide = Math.floor(servicesList.length - limit);
			slider.current.slickGoTo(lastSlide);
		}
	}, []);

	return (
		<div className={classes.root}>
			<DotsParallax />
			<div className={classes.carouselHandle}>
				<div className={classes.carouselWrap}>
					<Carousel ref={slider} {...settings}>
						{isDesktop && (
							<div className={classes.item}>
								<div className={classes.carouselProp}>
									<div />
								</div>
							</div>
						)}
						{servicesList.map((item, index) => (
							<div className={classes.item} key={index.toString()}>
								<Card
									title={item.title}
									desc={item.desc}
									img={item.img}
									button={t('common:agency-landing.services_button')}
									btnLink={item.btnLink}
								/>
							</div>
						))}
						{isDesktop && (
							<div className={classes.item}>
								<div className={classes.carouselProp}>
									<div />
								</div>
							</div>
						)}
					</Carousel>
				</div>
			</div>
			<div className={classes.floatingTitle}>
				<Container fixed>
					<div className={classes.title}>
						<TitleIcon
							text={t('common:agency-landing.services_title')}
							icon="apps"
							extended
						/>
						<nav className={classes.arrow}>
							<Fab
								size="small"
								onClick={() => slider.current.slickNext()}
								aria-label="prev"
								className={classes.margin}
							>
								<PrevIcon />
							</Fab>
							<Fab
								size="small"
								onClick={() => slider.current.slickPrev()}
								aria-label="next"
								className={classes.margin}
							>
								<NextIcon />
							</Fab>
						</nav>
					</div>
				</Container>
			</div>
		</div>
	);
}

Services.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(Services);
