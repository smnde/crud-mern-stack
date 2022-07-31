import express from "express";
import 
{
	getUsers,
	getUserById,
	storeUser,
	updateUser,
	destroyUser,
} from "../controllers/UsersController.js";

const route = express.Router();

route.get('/', (req, res) => {
	res.send('root');
});

route.get('/users', getUsers);
route.get('/users/:id', getUserById);
route.post('/users', storeUser);
route.patch('/users/:id', updateUser);
route.delete('/users/:id', destroyUser);

export default route;