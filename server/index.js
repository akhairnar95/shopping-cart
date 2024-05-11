//index.js
import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

dotenv.config();

const PORT = 5000;

Connection()
  .then(() => {
    app.use("/", Router);

    DefaultData();

    app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
