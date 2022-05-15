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
import { Doughnut } from 'react-chartjs-2';

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
  maintainAspectRatio: false,
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

const PeCeNetGraph = (props) => {
  const { netPE, netCE } = props.oiCompassList;
  let netTotalPE = 0;
  let netTotalCE = 0;
  netPE.forEach((item) => {
    netTotalPE = item + netTotalPE;
  });

  netCE.forEach((item) => {
    netTotalCE = item + netTotalCE;
  });

  const data = {
    // labels: ['CE Chg', 'PE Chg'],
    datasets: [
      {
        label: 'CE',
        data: [netTotalCE, netTotalPE],
        backgroundColor: ['rgba(255, 99, 132, 1)', '#00d25b'],
      },
    ],
  };

  return (
    <>
      <h4 className="card-title">PE/CE Ratio Net</h4>
      <div className="pe-ce-oi-graph">
        <Doughnut options={options} plugins={[ChartDataLabels]} data={data} />
      </div>
      <div className=" change-in-pe-ce">
        <ul>
          <li>
            Total PE OI <span>{netTotalPE}</span>
          </li>
          <li>
            Total CE OI<span>{netTotalCE}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default PeCeNetGraph;
