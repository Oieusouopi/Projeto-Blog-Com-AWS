import express, { Request, Response } from "express";
import treatedError from "./middlewares/error";
import router from "./routes/MainRouter";
class App {
	private app: express.Express;

	constructor() {
		this.app = express();

		this.app.use(express.json());

		this.app.get("/", (_req: Request, res: Response) => res.json({
			message: "Hello World"
		}));

		this.app.use(router);
		this.app.use(treatedError);

	}

	public start(PORT: number): void {
		this.app.listen(PORT, () => console.log(`rodando na porta ${ PORT }`));
	}
}

export default App;
