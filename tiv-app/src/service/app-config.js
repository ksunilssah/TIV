export const appConfig = [
	{
		title: 'Market Status',
		routeName: '/market-status',
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
		title: 'Live Market',
		routeName: '/live-market',
		icon: 'mdi-chart-bar'
	},
	{
		title: 'Pre Open',
		icon: 'mdi-laptop',
		subRoutes: [
			{
				title: 'Index',
				routeName: '/index'
			},
			{
				title: 'Stocks',
				routeName: '/stocks'
			}
		]
	},
	{
		title: 'Setup Scripts',
		routeName: '/setup-scripts',
		icon: 'mdi-security'
	}
];