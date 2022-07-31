import React, { useContext, useState } from "react";
import axios from "axios";
import Modals from "./Modals";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

export default function AddUser()
{
	const [openModal, setOpenModal] = useState(false);
	const { users, setUsers } = useContext(UserContext);
	const { register, handleSubmit, reset } = useForm();

	const store = async data => {
		await axios.post('users', data).then(res => {
				setUsers([...users, res.data]);
				reset();
			}).catch(err => console.log(err.message));

		setOpenModal(!openModal);
	}

	return (
		<>
			<button onClick={() => setOpenModal(!openModal)} className="py-2 bg-sky-300 w-full rounded-md shadow text-white font-semibold text-lg hover:bg-blue-500">
				Add User
			</button>

			<Modals open={openModal} setOpen={setOpenModal}>
					<h3 className="font-semibold text-lg">Add user</h3>
					<form onSubmit={handleSubmit(store)}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Fullname
							</label>
							<input {...register("fullname", {required: false})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="fullname" name="fullname" type="text" placeholder="Fullname" autoComplete="off" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Username
							</label>
							<input {...register("username", {required: false})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" autoComplete="off" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Role
							</label>
							<select {...register("role", {required: false})} className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="role" name="role">
								<option value="">Select role</option>
								<option value="admin">Admin</option>
								<option value="kasir">Kasir</option>
							</select>
						</div>
						<div className="flex items-center justify-end">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
								Add
							</button>
						</div>
					</form>	
			</Modals>
		</>
	);
}