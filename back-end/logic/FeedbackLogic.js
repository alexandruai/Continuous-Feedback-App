import Feedback from '../models/Feedback.js';
import Utilizator from '../models/User.js';

// Creare Feedback
async function createFeedback(UserId, feedback) {
  try {
    return await Feedback.create(
      {
        Mesaj: feedback.Mesaj,
        Recenzie: feedback.Recenzie,
        DataFeedback: feedback.DataFeedback,
        UserId: UserId
      });

  }
  catch (e) {
    return e.message;
  }
}

// Metoda de preluare feedback-uri
async function getFeedbacks() {
  try {
    return await Feedback.findAll();
  }
  catch (e) {
    return e.message;
  }
}

// Metoda de preluare feedback dupa id
async function getFeedbackById(id) {
  try {
    return await Feedback.findByPk(id);
  }
  catch (e) {
    return e.message;
  }
}

// Metoda de update feedback dupa id
async function updateFeedback(id, feedback) {
  let updateElem = await Feedback.findByPk(id);
  if (!updateElem)
    return { hasErrors: true, message: "Nu exista un feedback cu acest id!" };

  if (error.hasErrors) {
    return error.message;
  }
  return await updateElem.update(feedback);
}

// Metoda de delete feedback dupa id
async function deleteFeedback(id) {
  let deleteElem = await Feedback.findByPk(id);
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


export { createFeedback, getFeedbacks, getFeedbackById, updateFeedback, deleteFeedback };