import dotenv from "dotenv"

dotenv.config();

const envconfig = {
    port: process.env.PORT,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    jsonSecret: process.env.JS_SecretKey
}

export default envconfig;