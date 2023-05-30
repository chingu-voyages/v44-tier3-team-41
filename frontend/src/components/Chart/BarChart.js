import {
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

function BarChart({title, data}) {
	console.log(data);
	return (
		<div className="rounded-lg mb-5 bg-white shadow-lg py-6">
			<p className="text-center font-bold text-sm text-gray-700">
				{title}
			</p>
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
				<XAxis
					type="number"
					tick={{fontSize: '12px'}} // Adjust the label text size here
				/>
				<YAxis
					dataKey="name"
					type="category"
					scale="band"
					tick={{fontSize: '12px'}} // Adjust the label text size here
					tickLine={true} // Remove tick lines if necessary
				/>
				<Tooltip
					contentStyle={{
						fontSize: '12px', // Adjust the tooltip text size here
						border: '1px solid green', // Set the border color
						borderRadius: '8px',
					}}
				/>
				<Legend
					formatter={value => (
						<span
							style={{
								fontSize: '12px',
								color: 'gray',
							}}>
							{value}
						</span>
					)}
				/>

				<Bar
					dataKey="amount"
					barSize={30}
					fill="url(#colorGradient)"
					shape={props => {
						const {x, y, width, height} = props;
						return (
							<g>
								<defs>
									<linearGradient
										id="colorGradient"
										x1="0"
										y1="0"
										x2="1"
										y2="0">
										<stop
											offset="0%"
											stopColor="#0F172A"
										/>
										<stop
											offset="100%"
											stopColor="#475569"
										/>
									</linearGradient>
								</defs>
								<path
									d={`M${x},${y + height} h${
										width - 10
									} v${-height} h${
										-width + 10
									} L${x},${y} Z`}
									fill="url(#colorGradient)"
								/>
							</g>
						);
					}}
				/>
			</ComposedChart>
		</div>
	);
}

export default BarChart;
