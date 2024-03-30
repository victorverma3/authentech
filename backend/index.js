import express from "express";
import "./config.js";
import mongoose from "mongoose";
import cors from "cors";

import orgRoute from "./routes/orgRoute.js";
import verifyRoute from "./routes/verifyRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/organizations", orgRoute);
app.use("/verify", verifyRoute);

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send(`Backend for authentech`);
});

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
