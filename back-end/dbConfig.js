import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Configurarea bazei de date, preluand username-ul, password-ul si portul din fisierul .env
dotenv.config();
const db = new Sequelize({
    dialect: 'mssql',
    dialectOptions: {
        instanceName: 'MSSQLSERVER2014'
    },
    database: 'ContinuousFeedback',
    username: process.env.DB_USER,
    host: 'localhost',
    port: process.env.DB_PORT || undefined,
    password: process.env.DB_PASS,  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;