import React from "react";

export default function CampusFilter({ campus, setCampus }) {
	const campusChanged = event => {
		const value = event.target.value;
		setCampus(value);
		console.log(value);
	};

	return (
		<div>
			<label htmlFor="campus">Campus:</label>
			<select value={campus} onChange={campusChanged}>
				<option value="">All Campuses</option>
				<option value="Berlin">Berlin</option>
				<option value="Lisbon">Lisbon</option>
				<option value="Paris">Paris</option>
			</select>
		</div>
	);
}
