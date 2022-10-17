import connection from "../gateway/connection";
import User from "./createTable/User";

const useCreateTable = async () => {
	await connection.execute(User);
	await connection.end();
};

useCreateTable();