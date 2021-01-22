import Activitate from '../models/Activitate.js'

// Creare Activitate
async function createActivitate(activitate) {
  try { 
    return await Activitate.create({
      Denumire: activitate.Denumire,
      Descriere: activitate.Descriere,
      DataActivitate: activitate.DataActivitate,
      Durata: activitate.Durata,
      Cod: activitate.Cod
    });
  } catch (e) {
    return e.message;
  }

}
// Metoda de preluare activitati
async function getActivitate() {
  try {
    return await Activitate.findAll();
  }
  catch (e) {
    return e.message;
  }
}
// Metoda de preluare activitate dupa id
async function getActivitateById(id) {
  try {
    return await Activitate.findByPk(id);
  }
  catch (e) {
    return e.message;
  }
}
// Metoda de update activitate dupa id
async function updateActivitate(id, activitate) {
  let updateElem = await Activitate.findByPk(id);
  if (!updateElem)
    return { hasErrors: true, message: "Nu exista o activitate cu acest id!" };

  if (error.hasErrors) {
    return error.message;
  }
  return await updateElem.update(activitate);
}
// Metoda de delete activitate dupa id
async function deleteActivitate(id) {
  let deleteElem = await Activitate.findByPk(id);
  if (!deleteElem)
    return;
  try {
    return await deleteElem.destroy();
  }
  catch (e) {
    let message = "Activitatea nu poate fi stearsa pentru ca are utilizatori asociati!";
    if (e.message.includes("FK_User_Activitate")) {
      return message;
    }
    else throw (e);
  }
}

export { createActivitate, getActivitate, getActivitateById, updateActivitate, deleteActivitate };