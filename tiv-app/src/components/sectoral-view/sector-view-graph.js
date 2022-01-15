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

export const options = {
  responsive: true,
  //indexAxis: 'y',
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
};

const getChartData = (rowData) => {
  let labels = [];
  let data = [];
  rowData.map(({ pChange, symbol }) => {
    labels.push(symbol);
    data.push(pChange);
  });

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

const SectorViewGraph = (props) => {
  const { rowData } = props;

  return (
    <div className="col-lg-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <Bar options={options} data={getChartData(rowData)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorViewGraph;
