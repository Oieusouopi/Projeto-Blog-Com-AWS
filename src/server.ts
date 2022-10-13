import App from "./app";
import "dotenv/config";

const PORT: string | undefined = process.env.PORT;

new App().start(PORT);
