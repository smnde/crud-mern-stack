import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modals from "./Modals";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function EditUser({user})
{
	const [openModal, setOpenModal] = useState(false);


	const { getUsers } = useContext(UserContext);
	const { register, handleSubmit, reset } = useForm();
	
	const update = async data => {
		await axios.patch(`users/${data.id}`, data).then((res) => {
			console.log(res.data.message);
			getUsers();
			reset();
		}).catch(err => console.log(err.message));

		setOpenModal(!openModal);
	}

	return (
		<>
			<button onClick={() => setOpenModal(!openModal)} className="py-1.5 px-4 rounded shadow bg-green-500 text-white hover:bg-green-700 cursor-pointer">Edit user</button>

			<Modals open={openModal} setOpen={setOpenModal}>
				<h3 className="font-semibold text-lg">Edit user</h3>
				<form onSubmit={handleSubmit(update)}>
					<input type="hidden" name="id" {...register('id')} defaultValue={user._id} />
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Fullname
						</label>
						<input {...register("fullname", {required: false})} defaultValue={user.fullname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="fullname" name="fullname" type="text" placeholder="Fullname" autoComplete="off" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Username
						</label>
						<input {...register("username", {required: false})} defaultValue={user.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" autoComplete="off" />
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Role
						</label>
						<select {...register("role", {required: false})} defaultValue={user.role} className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:shadow-outline" id="role" name="role">
							<option value="">Select role</option>
							<option value="admin">Admin</option>
							<option value="kasir">Kasir</option>
						</select>
					</div>
					<div className="flex items-center justify-end">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Update
						</button>
					</div>
				</form>	
			</Modals>
		</>
	);
}