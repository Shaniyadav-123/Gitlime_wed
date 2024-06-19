import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import imgApi from '~/public/images/imgAPI';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
		[theme.breakpoints.down('md')]: {},
	},
	// spaceBottom: {
	// 	marginBottom: sectionMargin(theme.spacing()),
	// },
	// spaceTop: {
	// 	paddingTop: sectionMargin(theme.spacing()),
	// },
	containerWrap: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: theme.spacing(13, 0),
		// padding: theme.spacing(4),
		'& > section': {
			position: 'relative',
		},
		[theme.breakpoints.down('md')]: {
			margin: theme.spacing(8, 0),
			'& h2': {
				fontSize: 36,
			},
			'& h4': {
				fontSize: 22,
			},
		},
	},
	heading: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('400')]: {
			fontSize: '2.5rem',
		},
	},
	pera: {
		padding: '20px 200px',
		[theme.breakpoints.down('1260')]: {
			fontSize: '1.3rem',
			padding: '20px 130px',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '20px 0px',
		},
		[theme.breakpoints.down('400')]: {
			fontSize: '1rem',
		},
	},
	bannerImg: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '30px',
		width: '100%',
	},
}));

function ApplicationDeployment(props) {
	const classes = useStyles();
	const { onToggleDark, onToggleDir, invert } = props;

	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Blank page
				</title>
			</Head>
			<CssBaseline />
			<div className={classes.mainWrap}>
				<Header
					onToggleDark={onToggleDark}
					onToggleDir={onToggleDir}
					invert={invert}
				/>
				<main className={classes.containerWrap}>
					<section className={clsx(classes.spaceTop, classes.spaceBottom)}>
						<div className={classes.bannerImg}>
							<figure>
								<img src={imgApi.carousel[4]} width="100%" alt="cover" />
							</figure>
						</div>
						<Typography variant="h2" align="center" className={classes.heading}>
							Application Deployment
						</Typography>
						<Typography variant="h4" align="center" className={classes.pera}>
							A typical application deployment process consists of several key
							phases. An intuitive approach to completing these steps in a
							synchronized fashion dictates potential deployment success.
						</Typography>
					</section>
				</main>
				<section className={classes.spaceTop}>
					<Footer />
				</section>
				<Notification />
			</div>
		</React.Fragment>
	);
}
ApplicationDeployment.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
};
ApplicationDeployment.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});
ApplicationDeployment.defaultProps = {
	invert: false,
};

export default withTranslation(['common', 'agency-landing'])(
	ApplicationDeployment,
);
