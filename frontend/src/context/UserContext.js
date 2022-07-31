import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();
const UserProvider = ({children}) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		await axios.get('users')
			.then(res => setUsers(res.data))
			.catch(err => console.log(err.message));
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<UserContext.Provider value={{ users, setUsers, getUsers }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };