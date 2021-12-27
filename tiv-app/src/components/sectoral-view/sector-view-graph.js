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
import { niftyLabels } from '../../service/constants';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	responsive: true,
	color: '#fff',
	plugins: {
		legend: {
			position: 'none',
		},
		title: {
			display: true,
			text: 'Nifty Index',
			color: '#fff',
			fontSize: 14
		},
	},

};

export const data = {
	labels: niftyLabels,
	datasets: [
		{
			label: 'Nifty',
			data: ['1.62', '0.69', '0.58', '0.49', '0.48', '0.34', '0.21', '0.2', '0', '-0.06', '-0.08', '-0.12', '-1.06'],
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
				'rgba(255, 159, 64, 1)'
			],
			borderColor: [
				'rgba(255,255,255,1)',
			],
			borderWidth: .5,
		},
	],
};
const SectorViewGraph = () => {
	return <div className="col-lg-6 grid-margin stretch-card">
		<div className="card">
			<div className="card-body">
				<div className="table-responsive">
					<Bar options={options} data={data} />
				</div>
			</div>
		</div>
	</div>
}

export default SectorViewGraph;
