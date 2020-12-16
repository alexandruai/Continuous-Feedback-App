import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Utilizator=db.define("Utilizator",{
    UserId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false,
        isEmail:true
    },
    Password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    RolId:{
        type: Sequelize.INTEGER,
        allowNull: false
         }


})
export default Utilizator;