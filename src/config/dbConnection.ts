import {Sequelize} from 'sequelize-typescript';
import envconfig from './config';

const sequelize = new Sequelize({
    database: envconfig.dbName,
    dialect: 'mysql',
    username: envconfig.dbUsername,
    password: envconfig.dbPassword,
    host: envconfig.dbHost,
    port: Number(envconfig.dbPort),
    models: [__dirname + "/../models"], // Path to your models directory
})


sequelize.authenticate().then(()=>{
    console.log('Database connection has been established successfully.');
}).catch((error)=>{
    console.error('Unable to connect to the database:', error);
})

// migrate the database
sequelize.sync({alter: true}).then(()=>{
    console.log('Database synchronized successfully.');
}).catch((error)=> {
    console.error('Error synchronizing the database:', error);
})

export default sequelize;