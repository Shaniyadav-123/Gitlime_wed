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
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
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
	spaceBottom: {
		marginBottom: sectionMargin(theme.spacing()),
	},
	spaceTop: {
		paddingTop: sectionMargin(theme.spacing()),
	},
	containerWrap: {
		marginTop: theme.spacing(10),
		padding: theme.spacing(4),
		'& > section': {
			position: 'relative',
		},
	},
}));

function ProductDesign(props) {
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
						<Typography variant="h2" align="center" className={classes.heading}>
							Product Design & Development
						</Typography>
						<Typography variant="h4" align="center" className={classes.pera}>
							Develop results-driven products for entrepreneurs, startups, and
							enterprises with a leading software development company.
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
ProductDesign.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
};
ProductDesign.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});
ProductDesign.defaultProps = {
	invert: false,
};
export default withTranslation('common')(ProductDesign);
