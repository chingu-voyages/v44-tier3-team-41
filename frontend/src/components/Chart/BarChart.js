import {
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

function BarChart({ data, title }) {
	console.log(data)
	return (
		<div className="border border-black rounded-lg mb-5">
			<p className="text-center mt-5 font-bold">{title}</p>
			<ComposedChart
				layout="vertical"
				width={500}
				height={400}
				data={data}
				margin={{
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
				}}>
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis type="number" />
				<YAxis dataKey="name" scale="band" />
				<Tooltip />
				<Legend />
				<Bar dataKey="amount" barSize={20} fill="#BDC1C5" />
			</ComposedChart>
		</div>
	);
}

export default BarChart;