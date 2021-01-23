import Rol from '../models/Rol.js';
import Utilizator from '../models/User.js';

// Creare rol
async function createRol(rol) {
    try {
      return await Rol.create(rol, {
        include: [
          { model: Utilizator, as: "Users" }
        ]
      });
    }
    catch (e) {
      return e.message;
    }
  }

  // Metoda de preluare roluri
  async function getRoles() {
    try {
      return await Rol.findAll(
        {
          include: [
            {
              model: Utilizator,
              as: "Users"
            }
          ]
        });
    }
    catch (e) {
      return e.message;
    }
  }

  // Metoda de update rol dupa id
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

  // Metoda de delete user dupa id
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

  export {createRol,updateRol,getRoles,deleteRol};