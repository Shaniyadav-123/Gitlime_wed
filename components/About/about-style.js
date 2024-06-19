import { makeStyles } from '@material-ui/core/styles';
import { lighten, alpha } from '@material-ui/core/styles/colorManipulator';
// import imgApi from '~/public/images/imgAPI';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 3,
		'& blockquote': {
			fontSize: 30,
			fontStyle: 'italic',
			fontWeight: theme.typography.fontWeightBold,
			color:
				theme.palette.type === 'dark'
					? theme.palette.primary.light
					: theme.palette.primary.dark,
			borderLeft: '4px solid',
			borderLeftColor: '#fff',
			paddingLeft: theme.spacing(5),
			margin: theme.spacing(5, 0, 0),
			[theme.breakpoints.down('xs')]: {
				paddingLeft: theme.spacing(2),
				margin: 0,
				fontSize: 22,
				lineHeight: '32px',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 24,
				marginTop: theme.spacing(10),
			},
		},
		'& h4': {
			fontSize: 22,
			color:
				theme.palette.type === 'dark'
					? theme.palette.primary.light
					: theme.palette.primary.dark,
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
				margin: theme.spacing(-5),
				paddingTop: theme.spacing(6),
			},
		},
	},
	contentBg: {
		// background: theme.palette.primary.dark,
		background:
			theme.palette.type === 'dark'
				? theme.palette.primary.dark
				: theme.palette.primary.main,
		color:
			theme.palette.type === 'dark'
				? theme.palette.primary.light
				: theme.palette.primary.dark,
		// background:
		// 	theme.palette.type === 'dark'
		// 		? alpha(theme.palette.primary.dark, 0.4)
		// 		: lighten(theme.palette.primary.dark, 0),
		// height: 800,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		padding: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			// height: 980,
		},
	},
	imgWrap: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// border: '1px solid black',
		height: '100%',
		'& img': {
			position: 'absolute',
			transform: 'rotate(-90deg)',
			width: '42%',
			// height: '30',
			// padding: theme.spacing(0),
			[theme.breakpoints.down('md')]: {
				display: 'block',
			},
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
	},

	aboutHeading: {
		fontSize: 90,
		fontWeight: theme.typography.fontWeightBold,
		color: theme.palette.text.secondary,
		transform: 'rotate(-90deg)',
		marginTop: theme.spacing(2),
	},
	// puzzle: {
	//   position: 'relative',
	//   left: 60,
	//   top: -40,
	//   '& > div': {
	//     transform: 'rotate(45deg)',
	//     overflow: 'hidden',
	//     position: 'absolute',
	//     background: '#dedede'
	//   },
	//   '& span': {
	//     background: `url(${imgApi.agency[1]}) no-repeat fixed`,
	//     backgroundSize: 'auto 800px',
	//     transform: 'rotate(-45deg)',
	//     width: 560,
	//     height: 1000,
	//     display: 'block',
	//     position: 'relative',
	//     top: -110,
	//     left: 0,
	//   }
	// },
	pieceBig: {
		width: 300,
		height: 150,
		top: -175,
		left: 100,
		borderRadius: 32,
	},
	pieceSmallTop: {
		width: 100,
		height: 100,
		borderRadius: 24,
		top: 12,
		left: 170,
	},
	pieceSmallBottom: {
		width: 100,
		height: 100,
		borderRadius: 24,
		top: 90,
		left: 90,
	},
}));

export default useStyles;
