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


export {createFeedback};