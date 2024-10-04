import express, { Express } from "express";
import dotenv from 'dotenv';//Nhúng dotenv từ module dotenv
dotenv.config();//Thêm config cho dotenv

//Import database
import sequelize from "./config/database";

const app: Express = express();
const port : number | string =process.env.PORT ||3000;

sequelize;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});