import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SendIcon from '@material-ui/icons/Send';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { borders } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgApi from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyle from './banner-style';
import FilterFirstWord from '../utils/helpers/FilterFirstWord';

const items = [
	{
		id: 1,
		title: 'Transforming ideas into digital solutions',
		desc: 'Let us help you bring your vision to life with expert software development.',
		img: imgApi.carousel[2],
	},
	{
		id: 2,
		title: 'Bringing your tech dreams to life',
		desc: 'We deliver custom solutions that meet your unique needs and drive your business forward',
		img: imgApi.carousel[0],
	},
	{
		id: 3,
		title: 'Creating Cutting-Edge Technology',
		desc: 'Transform the way you do business with custom software designed to meet your unique needs."',
		img: imgApi.carousel[1],
	},
	{
		id: 4,
		title: 'Innovative software, limitless possibilities',
		desc: 'Join us as we lead the way in the development of cutting-edge software solutions',
		img: imgApi.carousel[3],
	},
];
const useStyles = makeStyles((theme) => ({}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
function VideoBanner(props) {
	// Theme breakpoints
	const theme = useTheme();
	const text = useText();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	// Translation function
	const { t } = props;

	// Youtube player
	const [play, setPlayed] = useState(false);
	const [playCtrl, setPlayedCtrl] = useState(true);
	const [player, setPlayer] = useState([]);
	const [position, setPosition] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 50, tension: 550, friction: 140 },
	}));
	const classes = useStyle();

	useEffect(() => {
		if (isDesktop) {
			/* Attention
			 ** HandleScroll function to optimize site with video background may give an error log
			 ** Uncaught TypeError: Cannot read property 'src' of null
			 ** It's because HMR in development mode, and react-youtube need to refresh.
			 ** The error log will not happen in production mode or just reload browser (development mode)
			 ** You can uncomment _onPlay() function, if you don't want see error browser log.
			 ** But then every changes you make, the browser will auto reload.
			 */
			// _onPlay();
		}
	}, []);

	const _onEnd = (event) => {
		event.target.playVideo();
	};

	const _onPlay = () => {
		const curTime = player[0].getCurrentTime();
		if (curTime > 0) {
			setPlayed(true);
			setPlayedCtrl(true);
		}
	};

	const _onReady = (event) => {
		player.push(event.target);
		setPlayer(player);
	};

	const _onTogglePause = () => {
		setPlayedCtrl(!playCtrl);
		if (playCtrl) {
			player[0].pauseVideo();
		} else {
			player[0].playVideo();
		}
	};

	const opts = {
		height: '720',
		width: '1080',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
			rel: 0,
			showinfo: 0,
			mute: 1,
			origin: 'http://localhost:3001',
		},
	};

	// const settings = {
	//   dots: true,
	//   infinite: true,
	//   speed: 500,
	//   slidesToShow: 1,
	//   slidesToScroll: 1
	// };

	return (
		<div className={classes.root}>
			<div className={classes.heroContent}>
				{/* <Hidden smUp>
					<figure className={classes.mobileCover}>
						<img src={imgApi.agency[0]} alt="cover" />
					</figure>
				</Hidden> */}
				<Container fixed={isDesktop}>
					<div className={classes.slider}>
						<Carousel
							animation="fade"
							interval={10000}
							duration={1000}
							indicatorIconButtonProps={{
								style: {
									padding: '10px', // 1
									color: 'grey', // 3
									display: 'none',
								},
							}}
							indicatorContainerProps={{
								style: {
									marginTop: '40px', // 5
									marginBottom: '0px', // 5
									textAlign: 'center', // 4
									color: 'green',
								},
							}}
						>
							{items.map((element, index) => (
								<Grid
									container
									className={classes.heroSlider}
									key={index.toString()}
								>
									<Grid
										sx={{ border: 1 }}
										item
										md={6}
										xs={12}
										className={classes.item}
									>
										{/* <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={clsx(classes.textHelper, text.title)}>
                  {t('common:agency-landing.banner_title')}
                </Typography>
              </div>
              <Typography className={clsx(classes.subtitle, text.subtitle)} variant="h5">
                {t('common:agency-landing.banner_subtitle')}
              </Typography>
              <Button variant="outlined" size="large" color="secondary" className={classes.button}>
                {t('common:agency-landing.banner_button')}
                <SendIcon className={classes.icon} />
              </Button>
            </div> */}
										{/* <div>
              <h2>Start editing to see some magic happen!</h2>
            </div> */}

										<Typography
											className={clsx(classes.textHelper, text.title2)}
											variant="h2"
										>
											<FilterFirstWord sentence={element.title} />
										</Typography>
										{element.desc && (
											<Typography
												className={clsx(
													classes.textHelper,
													text.subtitle,
													classes.subtitle,
												)}
												variant="h4"
											>
												{element.desc}
											</Typography>
										)}
										<Button
											target="_blank"
											href="/contact"
											variant="outlined"
											size="large"
											color="secondary"
											className={classes.button}
										>
											{t('common:agency-landing.banner_button')}
											<SendIcon className={classes.icon} />
										</Button>
									</Grid>
									{/* {isTablet && ( */}
									<Grid
										item
										md={6}
										xs={12}
										onMouseMove={({ clientX: x, clientY: y }) =>
											setPosition({ xy: calc(x, y) })
										}
									>
										<div className={classes.imgContainer}>
											<figure className={classes.sliderImg}>
												<img src={element.img} alt="cover" />
											</figure>
										</div>

										{/* <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    <Hidden mdDown>
                      {play && (
                        <IconButton
                          className={classes.btnPlay}
                          onClick={_onTogglePause}
                        >
                          {playCtrl ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>
                      )}
                    </Hidden>
                    {!play || isMobile ? <img src={imgApi.agency[0]} alt="cover" /> : null}
                    <div className={classes.overlay} />
                    {yt.use && (
                      <div className={classes.video}>
                        <Hidden mdDown>
                          <YouTube
                            videoId="rX2T9jH0OxA"
                            opts={opts}
                            onReady={_onReady}
                            onEnd={_onEnd}
                            onPlay={_onPlay}
                          />
                        </Hidden>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
									</Grid>
									{/* )} */}
								</Grid>
							))}
						</Carousel>
					</div>
				</Container>
			</div>
		</div>
	);
}

VideoBanner.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(VideoBanner);
