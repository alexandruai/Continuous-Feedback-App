import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Feedback = db.define("Feedback", {
    FeedbackId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Mesaj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Recenzie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DataFeedback: {
        type: Sequelize.DATE, 
        allowNull: false,
       
    },
    UserId: {
        type: Sequelize.STRING,
        allowNull: false
    }

})
export default Feedback;