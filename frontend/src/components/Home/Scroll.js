import {useEffect, useState} from 'react';
import Tech from '../../assets/Tech.json';

export default function Scroll() {
	const [techLogos, setTechLogos] = useState([]);

	useEffect(() => {
		const fetchTechLogos = async () => {
			try {
				const logos = await Promise.all(
					Tech.map(async logo => {
						const response = await fetch(logo.imageUrl);
						if (!response.ok) {
							throw new Error('Failed to fetch image: ' + response.status);
						}
						const blob = await response.blob();
						const url = URL.createObjectURL(blob);
						return {
							...logo,
							imageUrl: url,
						};
					})
				);
				setTechLogos(logos);
			} catch (error) {
				console.error('Error fetching tech logos:', error);
			}
		};

		fetchTechLogos();
	}, []);

	return (
		<div className="py-10 overflow-hidden bg-light1">
			<div>
				<p className="my-2 text-base font-bold text-center tracking-wide">
					List of Technologies
				</p>
			</div>
			<div className="inline-flex space-x-4 whitespace-nowrap">
				{/* Images */}
				<div className="inline-flex space-x-4 py-4 mx-auto gap-20 animate-scroll">
					{techLogos.map(logo => (
						<div
							className="flex-none"
							key={logo.name}>
							<img
								className="h-14"
								src={logo.imageUrl}
								alt={logo.name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
