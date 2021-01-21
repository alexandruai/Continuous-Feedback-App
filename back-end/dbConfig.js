import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    database: 'ContinuousFeedback',
    username: 'SA',
    host: 'localhost',
    port: '1433',
    password: 'Vampir9@',  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;