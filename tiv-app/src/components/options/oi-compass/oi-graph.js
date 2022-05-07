import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
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
import { getStrikesList } from '../../../service/oi-compass-service';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
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
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

@inject('store')
@observer
export default class OIGraph extends Component {
  componentDidMount() {
    getStrikesList();
  }
  getStrikes = () => {
    const strikesList = [];
    this.props.store.strikesList.forEach(({ strike }) => {
      strikesList.push(strike);
    });
    return strikesList;
  };

  render() {
    const labels = this.getStrikes();
    const data = {
      labels,
      datasets: [
        {
          label: 'CE',
          data: [
            4227, 7826, -9022, 6025, -5632, -2421, -4826, 2724, 7826, -9022,
            6025, -5623, -2421, -4826, -5203, -2201, -2862, 2234, 5602,
          ],
          backgroundColor: ['rgba(255, 99, 132, 1)'],
        },
        {
          label: 'PE',
          data: [
            -7092, 2626, 9090, -6284, -1081, 7297, -5879, 2794, 7986, -9902,
            6905, -5963, -2481, -4886, -6683, -9841, 9886, -3410, 8899,
          ],
          backgroundColor: ['#00d25b'],
        },
      ],
    };

    return (
      <div className="oi-graph">
        <Bar options={options} data={data} />
      </div>
    );
  }
}
