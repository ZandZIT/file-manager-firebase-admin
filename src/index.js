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

// import { readFile } from "fs/promises";
// const serviceAccount = JSON.parse(
//   await readFile(new URL("../serviceAccountKey.json", import.meta.url))
// );

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../serviceAccountKey.json");

console.log(serviceAccount);

// export const firebaseApp = getApp.length
//   ? getApp()
//   : admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     });



