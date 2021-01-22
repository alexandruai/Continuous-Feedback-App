import Feedback from '../models/Feedback.js';
import Utilizator from '../models/User.js';

async function createFeedback(UserId,feedback) {
    try{
        //eroare la data->trebuie rezolvata
        return await Feedback.create({
            Mesaj: feedback.Mesaj,
            Recenzie: feedback.Recenzie,
            DataFeedback:Date.parse(feedback.DataFeedback),
            UserId: UserId
  });

}
catch(e){
  return e.message;
}
}

async function getFeedbacks() {
  try {
      return await Feedback.findAll();
  }
  catch (e) {
      return e.message;
  }
}

async function getFeedbackById(id) {
  try {
      return await Feedback.findByPk(id);
  }
  catch (e) {
      return e.message;
  }
}

async function updateFeedback(id, feedback) {
  let updateElem = await Feedback.findByPk(id);
  let error = validateFeedback(feedback);
  if (!updateElem)
      return { hasErrors: true, message: "Nu exista un feedback cu acest id!" };

  if (error.hasErrors) {
      return error.message;
  }
  return await updateElem.update(feedback);
}

async function deleteFeedback(id) {
  let deleteElem = await Rol.findByPk(id);
  if (!deleteElem)
    return;
  try {
    return await deleteElem.destroy();
  }
  catch (e) {
    let message = "Feedbackul nu poate fi sters pentru ca are utilizatori asociati!";
    if (e.message.includes("FK_User_Feedback")) {
      return message;
    }
    else throw (e);
  }
}


export {createFeedback, getFeedbacks, getFeedbackById, updateFeedback, deleteFeedback};