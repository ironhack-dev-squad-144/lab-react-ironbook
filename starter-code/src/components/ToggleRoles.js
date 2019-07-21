import React from "react";

export default function ToggleRoles({ roleFilter, setRoleFilter }) {
	const toggleChecked = event => {
		const value = event.target.value;
		setRoleFilter({ ...roleFilter, [value]: !roleFilter[value] });
	};

	return (
		<div>
			<label htmlFor="teacher">Teacher:</label>
			<input
				type="checkbox"
				name="teacher"
				onChange={toggleChecked}
				value="teacher"
				checked={roleFilter.teacher}
				id="teacher"
			/>
			<label htmlFor="student">Student:</label>
			<input
				id="student"
				type="checkbox"
				name="student"
				onChange={toggleChecked}
				value="student"
				checked={roleFilter.student}
			/>
		</div>
	);
}
