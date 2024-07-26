import express from "express";
import dotenv from "dotenv";
import { PORT } from "./src/config/config.js";
import connectionDB from "./src/db/db.js";
import contactRouter from "./src/routes/contact.routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173/" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contacts/", contactRouter);

connectionDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
