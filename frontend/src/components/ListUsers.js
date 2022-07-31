import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import EditUser from "./EditUser";
import AddUser from "./AddUser";

export default function ListUsers()
{
	const { users, setUsers } = useContext(UserContext);
	const destroy = async id => {
		try {
			const res = await axios.delete(`users/${id}`);
			setUsers(users.filter(user => user._id !== id));
			console.log(res);
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<div className="flex flex-wrap flex-row gap-2 justify-center items-center w-full p-10">

			<AddUser />

			<div className="w-full rounded shadow-xl overflow-hidden">
				<div className="overflow-x-auto relative">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="py-3 px-6">
									#
								</th>
								<th scope="col" className="py-3 px-6">
									Fullname
								</th>
								<th scope="col" className="py-3 px-6">
									Username
								</th>
								<th scope="col" className="py-3 px-6">
									Role
								</th>
								<th scope="col" className="py-3 px-6">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{
								users.map((user, index) => {
									return (
										<tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{ index + 1 }
											</th>
											<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{ user.fullname }
											</th>
											<td className="py-4 px-6">
												{ user.username }
											</td>
											<td className="py-4 px-6">
												{ user.role }
											</td>
											<td className="py-4 px-6">
												<EditUser user={user} />
												<button onClick={() => destroy(user._id)} className="py-1.5 px-4 ml-2 rounded bg-red-500 shadow text-white hover:bg-red-700">Delete</button>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}