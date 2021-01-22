import Feedback from '../models/Feedback.js';
import Utilizator from '../models/User.js';

async function createFeedback(feedback) {
    try{
        //eroare la data->trebuie rezolvata
        return await Feedback.create({
            Mesaj: feedback.Mesaj,
            Recenzie: feedback.Descriere,
            DataFeedback:feedback.DataFeedback
            // UserId: UserId
  });

}
catch(e){
  return e.message;
}

}


export {createFeedback};