import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const port = 3002;
    // eslint-disable-next-line linebreak-style
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Error"));
