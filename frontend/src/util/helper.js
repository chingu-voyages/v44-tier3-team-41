export const sortArrayDesc = arr => {
	let sortedArray = arr && arr.sort((a, b) => b.amount - a.amount);
	return sortedArray;
};

export const groupAndCountCompany = data => {
	const groupedData = data.reduce((acc, item) => {
		const foundCompany = acc.find(group => group.name === item.company);

		if (foundCompany) {
			foundCompany.amount++;
		} else {
			acc.push({name: item.company, amount: 1});
		}

		return acc;
	}, []);
	return groupedData;
};

export const groupAndCountRole = data => {
	const groupedData = data.reduce((acc, item) => {
		const foundRole = acc.find(group => group.name === item.role);

		if (foundRole) {
			foundRole.amount++;
		} else {
			acc.push({name: item.role, amount: 1});
		}

		return acc;
	}, []);
	return groupedData;
};
