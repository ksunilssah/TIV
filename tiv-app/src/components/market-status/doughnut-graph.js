import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: false,
  color: '#fff',
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Nifty Index',
      color: '#fff',
      fontSize: 14,
    },
  },
};

const getGraphData = (data) => {
  const { declines, advances } = data;
  return {
    labels: [`Advances (${advances})`, `Declines (${declines})`],
    datasets: [
      {
        data: [advances, declines],
        borderColor: [
          '#00d25b',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        backgroundColor: ['#00d25b', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
};

const DoughnutGraph = (props) => {
  const { name, data = {} } = props;
  return (
    <>
      <h4 className="card-title">{name}</h4>
      <Doughnut data={getGraphData(data)} options={options} />
    </>
  );
};

export default DoughnutGraph;
