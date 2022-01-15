export const appConfig = [
	{
		title: 'Market Status',
		routeName: '/',
		icon: 'mdi-speedometer'
	},
	{
		title: 'Volume Shockers',
		routeName: '/volume-shocker',
		icon: 'mdi-laptop'
	},
	{
		title: 'High Momentum',
		routeName: '/high-momentum',
		icon: 'mdi-playlist-play'
	},
	{
		title: 'Sectoral View',
		routeName: '/sectoral-view',
		icon: 'mdi-table-large'
	},
	{
		title: 'Pre Open',
		icon: 'mdi-laptop',
		subRoutes: [
			{
				title: 'Index',
				routeName: '/pre-open-index'
			},
			{
				title: 'Stocks',
				routeName: '/pre-open-stocks'
			},
			{
				title: 'Nifty 50',
				routeName: '/pre-open-nifty-50'
			},
			{
				title: 'F&O',
				routeName: '/pre-open-fno'
			}
		]
	}
];