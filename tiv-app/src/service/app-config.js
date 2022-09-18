export const appConfig = [
  {
    title: 'Market Status',
    routeName: '/app',
    icon: 'mdi-speedometer',
  },
  {
    title: 'Volume Shockers',
    routeName: '/app/volume-shocker',
    icon: 'mdi-laptop',
  },
  {
    title: 'Momentum Spike',
    icon: 'mdi-playlist-play',
    subRoutes: [
      // {
      //   title: 'Momentum Spike',
      //   routeName: '/momentum-spike',
      // },
      {
        title: 'High Momentum',
        routeName: '/app/high-momentum',
      },
      // {
      //   title: 'Breakout (15min)',
      //   routeName: '/app/breakout-15',
      // },
    ],
  },
  {
    title: 'Options',
    icon: 'mdi-playlist-play',
    subRoutes: [
      {
        title: 'Trending OI',
        routeName: '/app/trending-oi',
      },
      {
        title: 'OI Compass',
        routeName: '/app/oi-compass',
      },
      {
        title: 'EGO',
        routeName: '/app/ego',
      },
    ],
  },
  {
    title: 'Sectoral View',
    routeName: '/app/sectoral-view',
    icon: 'mdi-table-large',
  },
  {
    title: 'Pre Open',
    icon: 'mdi-laptop',
    subRoutes: [
      {
        title: 'Index',
        routeName: '/app/pre-open-index',
      },
      {
        title: 'Stocks',
        routeName: '/app/pre-open-stocks',
      },
      {
        title: 'Bank Nifty',
        routeName: '/app/pre-open-bank-nifty',
      },
      {
        title: 'Nifty 50',
        routeName: '/app/pre-open-nifty-50',
      },
      {
        title: 'F&O',
        routeName: '/app/pre-open-fno',
      },
    ],
  },
  {
    title: 'Logout',
    routeName: '/logout',
    icon: 'mdi-logout text-danger',
  },
];
