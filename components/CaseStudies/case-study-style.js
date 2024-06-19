import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		zIndex: 10,
		marginTop: theme.spacing(18),
		paddingTop: theme.spacing(7),
		background:
			theme.palette.type === 'dark'
				? darken(theme.palette.primary.light, 0.8)
				: lighten(theme.palette.primary.light, 0.8),
		'& nav': {
			[theme.breakpoints.down('sm')]: {
				display: 'flex',
				overflow: 'auto',
			},
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(8),
		},
	},
	heroContent: {
		padding: 0,
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 3),
		},
	},
	filter: {
		borderRadius: theme.rounded.small,
		textTransform: 'capitalize',
		marginBottom: theme.spacing(),
		padding: theme.spacing(0.5, 2),
		width: '90%',
		[theme.breakpoints.down('sm')]: {
			'& > div': {
				textAlign: 'center',
			},
		},
	},
	active: {
		background: `${theme.palette.primary.light} !important`,
		color: theme.palette.primary.dark,
	},
	massonry: {
		'& button': {
			width: '100%',
		},
	},
}));

export default useStyles;
