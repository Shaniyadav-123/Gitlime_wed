import { makeStyles } from '@material-ui/core/styles';

const notificationStyles = makeStyles((theme) => ({
	notification: {
		width: '90%',
		[theme.breakpoints.down('lg')]: {
			width: '75%',
		},
		[theme.breakpoints.down('970')]: {
			width: '80%%',
			margin: 'auto',
		},
		[theme.breakpoints.down('600')]: {
			width: '90%',
		},
		'& > div': {
			width: '100%',
			color: theme.palette.common.white,
			background: theme.palette.primary.dark,
			[theme.breakpoints.up('sm')]: {
				padding: theme.spacing(1, 4),
			},
			'& > div:first-child': {
				[theme.breakpoints.up('sm')]: {
					flex: 1,
					marginRight: theme.spacing(2),
				},
				[theme.breakpoints.down('xs')]: {
					textAlign: 'center',
				},
			},
		},
	},
	button: {
		background: theme.palette.common.white,
		color: theme.palette.primary.dark,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 150,
		},
	},
	action: {
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			padding: 0,
			margin: 0,
		},
	},
}));

export default notificationStyles;
