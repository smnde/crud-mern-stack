import User from "../models/UserModel.js";

const getUsers = async (req, res) => {
	await User.find()
			.then(users => res.json(users))
			.catch(err => res.status(500).json({ message: err.message }));
}

const getUserById = async (req, res) => {
	await User.findById(req.params.id)
			.then(user => res.json(user))
			.catch(err => res.status(404).json({ message: err.message }));
}

const storeUser = async (req, res) => {
	const request = new User(req.body);
	await request.save().then(user => res.json(user))
				.catch(err => res.status(404).json({ message: err.message }));

}

const updateUser = async (req, res) => {
	await User.updateOne({_id: req.params.id}, {$set: req.body})
			.then(user => res.send({message: 'Success', data: req.body}))
			.catch(err => res.status(400).json({message: err.message}));
}

const destroyUser = async (req, res) => {
	await User.deleteOne({_id: req.params.id})
			.then(user => res.json(user))
			.catch(err => res.status(400).json({message: err.message}));
}

export { getUsers, getUserById, storeUser, updateUser, destroyUser };