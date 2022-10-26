import connection from "../gateway/connection";
import User from "./createTable/User";

const userCreateTable = async () => {
	await connection.execute(User);
	await connection.end();
};

userCreateTable();