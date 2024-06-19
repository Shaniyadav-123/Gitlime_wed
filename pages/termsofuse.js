import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, alpha } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const termsList = [
	{
		terms: '1.Use of the Site',
		terms_details:
			'The Site and its contents, including but not limited to text, images, and software, are the property of Gitlime and are protected by copyright and other intellectual property laws. You may not use the Site or its contents for any commercial purpose without the express written consent of Gitlime.',
	},
	{
		terms: '2.Services',
		terms_details:
			'Gitlime provides website development and web application development services to its clients. By using the Site or any services provided on the Site, you agree to be bound by the terms and conditions of any agreement between you and Gitlime regarding the use of such services.',
	},
	{
		terms: '3.Disclaimer',
		terms_details:
			'The Site and its contents are provided on an as is basis. Gitlime makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site.',
	},
	{
		terms: '4.Limitation of Liability',
		terms_details:
			'Gitlime shall not be liable for any damages of any kind arising from the use of the Site or any services provided on the Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
	},
	{
		terms: '5.Indemnification',
		terms_details:
			'You agree to indemnify and hold Gitlime, its officers, directors, employees, agents, and assigns harmless from any claims, damages, and expenses, including reasonable attorneys fees, arising from your use of the Site or any services provided on the Site.',
	},
	{
		terms: '6.Governing Law',
		terms_details:
			'These Terms shall be governed by and construed in accordance with the laws of the State of [STATE], without giving effect to any principles of conflicts of law.',
	},
	{
		terms: '7.Changes to the Terms',
		terms_details:
			'Gitlime reserves the right to make changes to the Terms at any time. Your continued use of the Site following the posting of changes to the Terms will indicate your acceptance of those changes',
	},
	{
		terms: '8.Contact Us',
		terms_details:
			'If you have any questions about these Terms, please contact us at: Email: hello@gitlime.com ',
	},
];
const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	spaceBottom: {
		marginBottom: sectionMargin(theme.spacing()),
	},
	spaceTop: {
		paddingTop: sectionMargin(theme.spacing()),
	},
	containerWrap: {
		marginTop: theme.spacing(10),
		padding: theme.spacing(0),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(12),
			marginBottom: theme.spacing(6),
		},
	},
	titleWrap: {
		position: 'relative',
		height: 300,
		paddingBottom: theme.spacing(0),
		background:
			theme.palette.type === 'dark'
				? alpha(theme.palette.primary.dark, 0.4)
				: lighten(theme.palette.primary.dark, 0),
		clipPath: 'polygon(0 0, 100% 0, 100% 58%, 48% 100%, 0 58%)',
		[theme.breakpoints.down('sm')]: {
			height: 100,
		},
		'& h4': {
			fontSize: 50,
			color: '#ffff',
			marginTop: theme.spacing(6),
			paddingTop: theme.spacing(10),
			textAlign: 'cenetr',
			fontWeight: '900',
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
				marginTop: theme.spacing(2),
				paddingTop: theme.spacing(3),
				// paddingBottom: theme.spacing(6),
			},
		},
	},
	contentWrap: {
		// boxShadow: '14px 14px 70px -20px rgb(17 9 61 / 15%)',
		margin: theme.spacing(9, 16),
		padding: theme.spacing(8),
		borderRadius: '12px',
		// position: 'absolute',
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(2),
			padding: theme.spacing(3),
		},
		'& h4': {
			fontSize: 25,
			fontWeight: '700',
			[theme.breakpoints.down('sm')]: {
				fontSize: 22,
			},
		},
		'& h5': {
			fontSize: 20,
			fontWeight: '700',
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
		},
		'& h6': {
			fontSize: 16,
			[theme.breakpoints.down('sm')]: {
				fontSize: 15,
			},
		},
	},
}));

function TermsOfUse(props) {
	const classes = useStyles();
	const { onToggleDark, onToggleDir, t, invert } = props;
	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Terms of Uses
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
					<section className={classes.titleWrap}>
						<Typography variant="h4" align="center" gutterBottom>
							{t('common:agency-landing.terms_conditions_title')}
						</Typography>
					</section>
					<section className={classes.contentWrap}>
						<Typography variant="h4" gutterBottom>
							{t('common:agency-landing.terms_conditions_greet')}
						</Typography>
						<Typography variant="h6" gutterBottom>
							{t('common:agency-landing.terms_conditions_para')}
						</Typography>
						{termsList.map((item, index) => (
							<div className={classes.item} key={index.toString()}>
								<Typography variant="h5" gutterBottom>
									{item.terms}
								</Typography>
								<Typography variant="h6" gutterBottom>
									{item.terms_details}
								</Typography>
								<br />
							</div>
						))}
					</section>
				</main>
				<section>
					<Footer />
				</section>
				<Notification />
			</div>
		</React.Fragment>
	);
}

TermsOfUse.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
	t: PropTypes.func.isRequired,
};
TermsOfUse.defaultProps = {
	invert: false,
};

TermsOfUse.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});

export default withTranslation(['common', 'agency-landing'])(TermsOfUse);
