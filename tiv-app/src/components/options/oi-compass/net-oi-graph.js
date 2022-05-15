import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'x',
  color: '#fff',
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: 'rgba(255, 255, 255, .1)',
      },
      ticks: {
        color: '#fff',
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, .1)',
      },
      ticks: {
        color: '#fff',
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 0,
      height: 50,
    },
  },
  plugins: {
    datalabels: {
      display: true,
      anchor: 'end',
      color: '#fff',
      align: 'end',
      offset: 5,
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const NetOIGraph = (props) => {
  const { strikesList, netPE, netCE } = props.oiCompassList;

  const data = {
    labels: strikesList,
    datasets: [
      {
        label: 'CE',
        data: netCE,
        backgroundColor: ['rgba(255, 99, 132, 1)'],
      },
      {
        label: 'PE',
        data: netPE,
        backgroundColor: ['#00d25b'],
      },
    ],
  };

  return (
    <div className="oi-graph">
      <Bar options={options} plugins={[ChartDataLabels]} data={data} />
    </div>
  );
};
export default NetOIGraph;
