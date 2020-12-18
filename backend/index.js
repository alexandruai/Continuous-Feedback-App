import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Rol from './models/Rol.js';
import Utilizator from './models/User.js';
import Activitate from './models/Activitate.js';


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
//Relatie One to Many Rol si Utilizator
Rol.hasMany(Utilizator, { as: "Users", foreignKey: "RolId" });
Utilizator.belongsTo(Rol, { foreignKey: "RolId" });
//metode CRUD Rol si User
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
async function updateRol(id, rol) {
  let element = await Rol.findByPk(id);
  if (!element) {
    return "Nu a fost gasit elementul";
  }
  try {
    return await element.update(rol);
  }
  catch (e) {
    return e.message;
  }


}
async function deleteRol(id) {
  let deleteElem = await Rol.findByPk(id);
  if (!deleteElem)
    return;
  try {
    return await deleteElem.destroy();

  }
  catch (e) {
    let message = "Rolul nu poate fi sters pentru ca are utilizatori asociati!";
    if (e.message.includes("FK_User_Rol")) {
      return message;
    }
    else throw (e);
  }
}
async function createUser(RolId, user) {
  return await Utilizator.create({
    Email: user.Email,
    Password: user.Password,
    RolId: RolId

  });

}
async function getUsers(){
  return await Utilizator.findAll();
}
async function getUserById(id){
  return await Utilizator.findByPk(id);
}
async function updateUser(id, user) {
  let updateElem = await Utilizator.findByPk(id);
  console.log(updateElem);
  if (!updateElem) {
    return "nu am gasit elementul";

  }

  return await updateElem.update(user);

}
async function deleteUser(id) {
  let deleteElem = await Utilizator.findByPk(id);
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

    } else if (e.message.includes("FK_User_Activitate")) {
      return "Utilizatorul nu poate fi sters, fiindca are activitati!"
    }


    else throw (e);
  }
}
//Rute pentru roluri si user
router.route('/createRol').post(async (req, res) => {
  return res.status(201).json(await createRol(req.body));
});
router.route('/roluri').get(async (req, res) => {
  return res.status(200).json(await getRoles());
});
router.route('/rol/:id').put(async (req, res) => {
  return res.json(await updateRol(req.params.id, req.body));
});
router.route('/deleteRol/:id').delete(async (req, res) => {
  return res.json(await deleteRol(req.params.id));
});
router.route('/createUser/:id').post(async (req, res) => {
  return res.status(201).json(await createUser(req.params.id, req.body));
});
router.route('/user/:id').get(async(req,res)=>{
  return res.json(await getUserById(req.params.id));
});
router.route('/users').get(async(req,res)=>{
  return res.json(await getUsers());
});
router.route('/updateUser/:id').put(async (req, res) => {
  return res.json(await updateUser(req.params.id, req.body));
});
router.route('/deleteUser/:id').delete(async (req, res) => {
  return res.json(await deleteUser(req.params.id));
});
//Activitati
Utilizator.hasMany(Activitate, { as: "Activitati", foreignKey: "UserId" });
Activitate.belongsTo(Utilizator, { foreignKey: "UserId" });

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

let port = process.env.PORT || 8000;
app.listen(port);
console.log('API is runnning at ' + port);
