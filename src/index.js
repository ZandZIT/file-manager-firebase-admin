import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/index.js";

import { getApp } from "firebase-admin/app";


dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());

const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use("/", router());


import admin from "firebase-admin"

// eslint-disable-next-line no-undef
// import serviceAccount from "../serviceAccountKey.json" assert { type: "json" };
import { readFile } from "fs/promises";

let serviceAccount = JSON.parse(
  await readFile("serviceAccountKey.json", "utf8")
);

console.log(serviceAccount)

export const firebaseApp = getApp.length
  ? getApp()
  : admin.initializeApp({
      credentiacl: admin.credential.cert(serviceAccount),
    });



