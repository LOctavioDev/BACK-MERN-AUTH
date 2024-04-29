import app from "./app.js";
import { conectDB } from "./db.js";
import 'dotenv/config'

conectDB();

const port = process.env.PORT;

app.listen(port);

console.log(`SERVER ON PORT: ${port}`);
