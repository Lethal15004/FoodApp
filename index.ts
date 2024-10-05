import express, { Express } from "express";
import dotenv from 'dotenv';//Nhúng dotenv từ module dotenv
import cors from "cors" //Nhúng cors vào dự án
dotenv.config();//Thêm config cho dotenv

//Import database
import sequelize from "./config/database";

import routesAPI from "./routes/index.route";

const app: Express = express();
const port : number | string =process.env.PORT ||3000;

app.use(cors());//Nhúng cors vào dự án

sequelize;

routesAPI(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});