import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import TitleDeco from '../Title/WithDecoration';
import useStyles from './about-style';
import imgApi from '~/public/images/imgAPI';
import useTitle from '../Title/title-style';
import Counter from '../Counter';
function About(props) {
	// Theme breakpoints
	const theme = useTheme();
	const text = useText();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

	// Translation function
	const { t } = props;

	const classes = useStyles();
	const title = useTitle();
	return (
		<div className={classes.root}>
			<div className={classes.contentBg} fixed="true">
				<Grid container>
					<Grid item md={2} xs={12}>
						<div className={classes.imgWrap}>
							<img
								src={
									theme.palette.type === 'light'
										? imgApi.logos[3]
										: imgApi.logos[2]
								}
								className={classes.contentImg}
								alt="cover"
							/>
							{/* <img src={gitlimereverse} className={classes.contentImg} alt="cover" /> */}
							{/* <TitleDeco text={t('common:agency-landing.about_title')} /> */}
							{/* <Typography className={clsx(classes.textHelper, classes.aboutHeading)}>{t('common:agency-landing.about_title')}</Typography> */}
							{/* <figure className={classes.contentImg}>
                <img src={darken ? imgApi.agency[10] : imgApi.agency[11]} alt="cover" />
              </figure> */}
						</div>
						{/* <div>
              <TitleDeco text={t('common:agency-landing.about_title')} />
              {isDesktop && (
                <div className={classes.puzzle}>
                  <div className={classes.pieceBig}>
                    <span />
                  </div>
                  <div className={classes.pieceSmallTop}>
                    <span />
                  </div>
                  <div className={classes.pieceSmallBottom}>
                    <span />
                  </div>
                </div>
              )}
            </div> */}
					</Grid>
					<Grid item md={10} xs={12}>
						<div className={classes.contentText}>
							<Typography
								className={clsx(title.default, text.subtitle)}
								variant="h4"
							>
								{t('common:agency-landing.about_para_one')}
							</Typography>
							<Typography
								className={clsx(title.default, text.subtitle)}
								variant="h4"
							>
								{t('common:agency-landing.about_para_two')}
							</Typography>
							<Counter />
							<Typography
								className={clsx(title.default, text.subtitle)}
								variant="h4"
							>
								{t('common:agency-landing.about_para_three')}
							</Typography>
							<blockquote>{t('common:agency-landing.about_quote')}</blockquote>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

About.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(About);
