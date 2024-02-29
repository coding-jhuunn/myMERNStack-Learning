import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URL } from "./config.js";
import { Book } from "./models/bookModels.js";
import bookRoutes from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MErn ");
});

app.use("/books", bookRoutes);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
