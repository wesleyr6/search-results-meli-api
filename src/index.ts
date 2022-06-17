import express from "express";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(compression());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
