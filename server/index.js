import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 8080;
import path from "path";
const __dirname = path.resolve();

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.use(express.static(path.join(__dirname, "./client/build")));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

Connection(username, password);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
