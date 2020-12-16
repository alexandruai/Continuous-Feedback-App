import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Rol from './models/Rol.js';
import Utilizator from './models/User.js';
import Activitate from './models/Activitate.js';
import Feedback from './models/Feedback.js';
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Rol.hasMany(Utilizator, { as: "Users", foreignKey: "RolId" });
Utilizator.belongsTo(Rol, { foreignKey: "RolId" });

async function createRol(rol) {
  return await Rol.create(rol, {
    include: [
      { model: Utilizator, as: "Users" }
    ]
  });

}
async function getRoles() {
  return await Rol.findAll(
    {
      include: [
        {
          model: Utilizator,
          as: "Users"
        }
      ]
    })
}
async function deleteRol(id) {
  let deleteElem = await Rol.findByPk(id);
  if (!deleteElem)
    return;
  try {
    return await deleteElem.destroy();

  }
  catch (e) {
    let message = "This entity is already in use so it cannot be deleted";
    if (e.message.includes("FK_User_Rol")) {

      console.log(message);
      return message;

    }
    else throw (e);
  }
}
// async function updateRol(id, rol) {
//   let updateElem = await Rol.findByPk(id,{include:[{
//     model: Utilizator,
//     as: "Users"
//   }]});
//   console.log(updateElem);
//   if (!updateElem) {
//     return "nu am gasit elementul";

//   }
  
//     return await updateElem.update(rol, {
//       include: [{
//         model: Utilizator,
//         as: "Users"
//       }
//       ]
//     });
 
// }
//Rute pentru roluri si user
router.route('/createRol').post(async (req, res) => {
  return res.json(await createRol(req.body));

});
router.route('/roluri').get(async (req, res) => {
  return res.json(await getRoles());
});
router.route('/deleteRol/:id').delete(async (req, res) => {
  return res.json(await deleteRol(req.params.id));
});
// router.route('/rol/:id').put(async (req, res) => {
//   return res.json(await updateRol(req.params.id, req.body));
// })

//Activitati si Feedback -> DE FACUT




let port = process.env.PORT || 8000;
app.listen(port);
console.log('API is runnning at ' + port);
