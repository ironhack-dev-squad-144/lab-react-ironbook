import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import UserFilter from "./components/UserFilter";
import ToggleRoles from "./components/ToggleRoles";
import CampusFilter from "./components/CampusFilter";
import { filterUsers } from "./utils";
import users from "./users.json";

function App() {
	const [search, setSearch] = useState("");
	const [roleFilter, setRoleFilter] = useState({
		teacher: true,
		student: true
	});
	const [campus, setCampus] = useState("");

	const filteredUsers = filterUsers(users, search, roleFilter, campus);
	return (
		<div className="App">
			<h1>IronBook</h1>
			<UserFilter setSearch={setSearch} search={search} />
			<ToggleRoles
				setRoleFilter={setRoleFilter}
				roleFilter={roleFilter}
			/>
			<CampusFilter campus={campus} setCampus={setCampus} />
			<UserList users={filteredUsers} />
		</div>
	);
}
export default App;
