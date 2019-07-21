import React from "react";
import User from "./User";
import { v4 } from "uuid";

const Users = ({ users }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Lase Name</th>
						<th>Campus</th>
						<th>Role</th>
						<th>Link</th>
					</tr>
					{users.map(user => (
						<User user={user} key={v4()} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
