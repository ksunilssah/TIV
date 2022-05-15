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

const PeCeGraph = (props) => {
  const { PE, CE } = props.oiCompassList;
  let totalPE = 0;
  let totalCE = 0;
  PE.forEach((item) => {
    totalPE = item + totalPE;
  });

  CE.forEach((item) => {
    totalCE = item + totalCE;
  });

  const data = {
    labels: ['CE Chg', 'PE Chg'],
    datasets: [
      {
        label: 'CE',
        data: [totalCE, totalPE],
        backgroundColor: ['rgba(255, 99, 132, 1)', '#00d25b'],
      },
    ],
  };

  return (
    <>
      <h4 className="card-title">Change in CE/PE</h4>
      <div className="pe-ce-oi-graph  ">
        <Bar options={options} plugins={[ChartDataLabels]} data={data} />
      </div>
      <div className="change-in-pe-ce">
        <ul>
          <li>
            Change in PE <span>{totalPE}</span>
          </li>
          <li>
            Change in CE <span>{totalCE}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default PeCeGraph;
