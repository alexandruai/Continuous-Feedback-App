import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const db = new Sequelize({
    dialect: 'mssql',
    database: 'ContinuousFeedback',
    username: process.env.DB_USER,
    host: 'localhost',
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;