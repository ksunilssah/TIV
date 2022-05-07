import React, { Component } from 'react';
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
import IndexView from './index-view';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
class SectorViewGraph extends Component {
  state = {
    isIndexViewVisitable: false,
    selectedIndex: '',
  };
  getOptions = (barData) => {
    const options = {
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
      onClick: (evt, elements) => {
        const selectedIndex = barData.labels[elements[0].index];
        this.setState({
          selectedIndex,
          isIndexViewVisitable: true,
        });
      },
    };
    return options;
  };

  onDialogClose = () => {
    this.setState({
      isIndexViewVisitable: false,
    });
  };

  render() {
    const { rowData } = this.props;
    const barData = getChartData(rowData);
    const { isIndexViewVisitable, selectedIndex } = this.state;
    return (
      <>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="sectoral-view-graph">
                <Bar options={this.getOptions(barData)} data={barData} />
              </div>
            </div>
          </div>
        </div>
        {isIndexViewVisitable && (
          <IndexView
            onDialogClose={this.onDialogClose}
            showDialog={isIndexViewVisitable}
            selectedIndex={selectedIndex}
          />
        )}
      </>
    );
  }
}

export default SectorViewGraph;
