import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import LangIcon from '@material-ui/icons/Language';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { i18n, withTranslation } from '~/i18n';
// import logo from '~/public/images/agency-logo.svg';
import brand from '~/public/text/brand';
import { useTextAlign } from '~/theme/common';
import useStyles from './footer-style';

function Copyright() {
	return (
		<Typography variant="body2" display="block" color="textSecondary">
			&copy;&nbsp;
			{brand.agency.footerText}&nbsp;{new Date().getFullYear()}
		</Typography>
	);
}

const footers = [
	{
		title: 'Company',
		description: ['Contact us', 'Locations'],
		link: ['/contact', '#locations'],
	},
	// {
	// 	title: 'Resources',
	// 	description: [
	// 		'Resource',
	// 		'Resource name',
	// 		'Another resource',
	// 		'Final resource',
	// 	],
	// 	link: [
	// 		'#resource',
	// 		'#resource-name',
	// 		'#another-resource',
	// 		'#final-resource',
	// 	],
	// },
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
		link: ['/privacypolicy', '/termsofuse'],
	},
];

function Footer(props) {
	const [ctn, setCtn] = useState(null);
	// Theme breakpoints
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	// Translation Function
	const { t } = props;

	const classes = useStyles();
	const align = useTextAlign();
	const [values, setValues] = useState({
		lang: 'eng',
	});

	useEffect(() => {
		setValues({ lang: i18n.language });
		setCtn(document.getElementById('main-wrap'));
	}, []);

	function handleChange(event) {
		setValues((oldValues) => ({
			...oldValues,
			[event.target.name]: event.target.value,
		}));
		if (event.target.value === 'ara') {
			i18n.changeLanguage('ara');
			props.toggleDir('rtl');
		} else {
			i18n.changeLanguage(event.target.value);
			props.toggleDir('ltr');
		}
	}

	return (
		<Container maxWidth="lg" component="footer" className={classes.footer}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={3}>
					<div className={classes.logo}>
						{/* <img src={logo} alt="logo" /> */}
						<Typography variant="h6" color="textPrimary">
							{brand.agency.projectName}
						</Typography>
					</div>
					<Typography className={classes.mail}>{brand.agency.mail}</Typography>
					<Typography
						color="textPrimary"
						className={classes.footerDesc}
						gutterBottom
					>
						{t('common:agency-landing.footer_paragraph')}
					</Typography>
					{isDesktop && <Copyright />}
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={4} justify-content="space-evenly">
						{footers.map((footer) => (
							<Grid
								item
								xs={12}
								md={6}
								key={footer.title}
								className={classes.siteMapItem}
							>
								{isDesktop && (
									<div>
										<Typography
											variant="h6"
											className={classes.title}
											color="textPrimary"
											gutterBottom
										>
											{footer.title}
										</Typography>
										<ul>
											{footer.description.map((item, index) => (
												<li key={item}>
													<Link
														href={footer.link[index]}
														variant="subtitle1"
														color="textSecondary"
													>
														{item}
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
								{isMobile && (
									<Accordion
										square
										classes={{
											root: classes.accordionRoot,
										}}
									>
										<AccordionSummary
											expandIcon={
												<ExpandMoreIcon className={classes.accordionIcon} />
											}
											aria-controls="panel1a-content"
											id="panel1a-header"
											classes={{
												content: classes.accordionContent,
											}}
										>
											<strong>{footer.title}</strong>
										</AccordionSummary>
										<AccordionDetails>
											<ul>
												{footer.description.map((item, index) => (
													<li key={item}>
														<Link
															href={footer.link[index]}
															variant="subtitle1"
															color="textSecondary"
														>
															{item}
														</Link>
													</li>
												))}
											</ul>
										</AccordionDetails>
									</Accordion>
								)}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<div className={classes.socmed}>
						<IconButton
							aria-label="FB"
							className={classes.margin}
							size="small"
							onClick={() => {
								window.open('https://twitter.com/gitlime', '_blank');
							}}
						>
							<i className="ion-logo-twitter" />
						</IconButton>
						<IconButton
							aria-label="TW"
							className={classes.margin}
							size="small"
							onClick={() => {
								window.open('https://www.facebook.com/gitlime', '_blank');
							}}
						>
							<i className="ion-logo-facebook" />
						</IconButton>
						{/* <IconButton aria-label="IG" className={classes.margin} size="small" onClick={() => { window.open("https://twitter.com/gitlime", "_blank") }}>
              <i className="ion-logo-instagram" />
            </IconButton> */}
						<IconButton
							aria-label="LI"
							className={classes.margin}
							size="small"
							onClick={() => {
								window.open(
									'https://www.linkedin.com/company/gitlime',
									'_blank',
								);
							}}
						>
							<i className="ion-logo-linkedin" />
						</IconButton>
						<IconButton
							aria-label="LI"
							className={classes.margin}
							size="small"
							onClick={() => {
								window.open('https://www.pinterest.com/gitlime', '_blank');
							}}
						>
							<i className="ion-logo-pinterest" />
						</IconButton>
						<IconButton
							aria-label="LI"
							className={classes.margin}
							size="small"
							onClick={() => {
								window.open('https://github.com/gitlimetech', '_blank');
							}}
						>
							<i className="ion-logo-github" />
						</IconButton>
					</div>
					<Select
						value={values.lang}
						onChange={handleChange}
						MenuProps={{
							container: ctn,
						}}
						startAdornment={
							<InputAdornment className={classes.icon} position="start">
								<LangIcon />
							</InputAdornment>
						}
						className={classes.selectLang}
						input={
							<OutlinedInput
								labelWidth={200}
								name="lang"
								id="outlined-lang-simple"
							/>
						}
					>
						<MenuItem value="eng">English</MenuItem>
						<MenuItem value="deu">Deutsch</MenuItem>
						<MenuItem value="ara">العربيّة</MenuItem>
						<MenuItem value="ind">Bahasa Indonesia</MenuItem>
						<MenuItem value="prt">Português</MenuItem>
						<MenuItem value="zho">简体中文</MenuItem>
					</Select>
				</Grid>
			</Grid>
			{isMobile && (
				<div className={align.textCenter}>
					<Box p={4}>
						<Copyright />
					</Box>
				</div>
			)}
		</Container>
	);
}

Footer.propTypes = {
	t: PropTypes.func.isRequired,
	toggleDir: PropTypes.func,
};

Footer.defaultProps = {
	toggleDir: () => {},
};

export default withTranslation(['agency-landing'])(Footer);
