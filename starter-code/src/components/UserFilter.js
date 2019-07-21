import React from "react";

export default function UserFilter({ setSearch, search }) {
	const handleChange = event => {
		const value = event.target.value;
		setSearch(value);
	};
	return (
		<div>
			<input
				type="text"
				name="userSearch"
				onChange={handleChange}
				value={search}
			/>
		</div>
	);
}
