import React from "react";
import ListUsers from "./components/ListUsers";
import { UserProvider } from "./context/UserContext";

export default function App()
{
	return (
		<>
			<div className="p-2 w-full bg-sky-500">
				<h3 className="text-white text-lg text-center">Navbar</h3>
			</div>

			<UserProvider>
				<ListUsers />
			</UserProvider>
		</>
	);
}