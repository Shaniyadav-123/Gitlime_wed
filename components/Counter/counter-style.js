import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles((theme) => ({
	counterWrap: {
		margin: theme.spacing(3, 0),
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: theme.spacing(6),
		},
	},
	text: {},
	counterItem: {
		'& p': {
			fontSize: 22,
			textTransform: 'capitalize',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'& $text': {
			textAlign: 'center',
			'& h3': {
				position: 'relative',
				fontWeight: 'bold',
				paddingBottom: theme.spacing(2),
				marginBottom: theme.spacing(4),
				[theme.breakpoints.down('sm')]: {
					paddingBottom: theme.spacing(1),
					marginBottom: theme.spacing(3),
				},
				'&:after': {
					content: '""',
					width: 50,
					height: 8,
					borderRadius: 5,
					background: theme.palette.primary.main,
					position: 'absolute',
					bottom: theme.spacing(-2),
					left: 'calc(50% - 25px)',
				},
			},
		},
	},
}));

export default counterStyles;
