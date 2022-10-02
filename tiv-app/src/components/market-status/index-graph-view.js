import React from 'react';
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

const getOptions = () => ({
  responsive: true,
  indexAxis: 'y',
  maintainAspectRatio: false,
  color: '#fff',
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
  plugins: {
    legend: {
      position: 'none',
    },
    title: {
      display: true,
      text: 'Nifty Index',
      color: '#fff',
      fontSize: 14,
    },
  },
});

const getChartData = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        label: 'Nifty',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: ['rgba(255,255,255,1)'],
        borderWidth: 0.5,
      },
    ],
  };
};

const IndexGraphView = (props) => {
  const { labels = [], data = [] } = props;
  return (
    <div className="col-6 grid-margin">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive market-view-height">
            <Bar options={getOptions()} data={getChartData(labels, data)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexGraphView;
