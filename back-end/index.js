import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Rol from './models/Rol.js';
import Utilizator from './models/User.js';
import Activitate from './models/Activitate.js';
import user from './routes/UserRoutes.js';
import rol from './routes/RolRoutes.js';
import feedback from './routes/FeedbackRoutes.js';
import Feedback from './models/Feedback.js';
import activity from './routes/ActivitateRoutes.js'
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',rol);
app.use('/api',user);
app.use('/api',feedback);
app.use('/api',activity);

// Autentificare la baza de date
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//Relatie One to Many Rol si Utilizator
Rol.hasMany(Utilizator, { as: "Users", foreignKey: "RolId" });
Utilizator.belongsTo(Rol, { foreignKey: "RolId" });


//Activitati
Utilizator.hasMany(Activitate, { as: "Activitati", foreignKey: "UserId" });
Activitate.belongsTo(Utilizator, { foreignKey: "UserId" });

//Feedback
Utilizator.hasMany(Feedback, { as: "Feedback", foreignKey: "UserId" });
Feedback.belongsTo(Utilizator, { foreignKey: "UserId" });



// async function createActivitate(UserId, activitate) {
//   try{
//     //eroare la data->trebuie rezolvata
//     return await Activitate.create({
//     Denumire: activitate.Denumire,
//     Descriere: activitate.Descriere,
//     DataActivitate:activitate.DataActivitate,
//     Durata:activitate.Durata,
//     Cod:activitate.Cod,
//     UserId: UserId
//   });
// }
// catch(e){
//   return e.message;
// }

// }
// router.route('/createActivitate/:id').post(async (req, res) => {
//   return res.status(201).json(await createActivitate(req.params.id, req.body));
// });

let port = process.env.PORT || 8080;
app.listen(port);
console.log('API is runnning at ' + port);
