import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import api from "./routes/api.js";

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mern-stack-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Database connected'));

app.use(cors());
app.use(express.json());
app.use(api);

app.listen(port, () => console.log(`Running at http://localhost:${port}`));