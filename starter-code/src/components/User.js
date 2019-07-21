import React from "react";

export default function User({ user }) {
	return (
		<tr>
			<td>
				<p>{user.firstName}</p>
			</td>
			<td>
				<p>{user.lastName}</p>
			</td>
			<td>
				<p>{user.campus}</p>
			</td>
			<td>
				<p>{user.role}</p>
			</td>
			<td>
				{user.linkedin && (
					<a
						href={user.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="linkedInIcon"
							src="/img/linkedin.png"
							alt={user.linkedin}
						/>
					</a>
				)}
			</td>
		</tr>
	);
}
