import App from "./app";
import "dotenv/config";

const PORT: number = Number(process.env.PORT) || 3333;

new App().start(PORT);
