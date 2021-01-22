import Activitate from '../models/Activitate.js'
import User from '../models/User.js'

async function createActivitate(activitate) {

           try{ // //eroare la data->trebuie rezolvata 
           return await Activitate.create({ 
               Denumire: activitate.Denumire, 
               Descriere: activitate.Descriere, 
               DataActivitate:activitate.DataActivitate, 
               Durata:activitate.Durata, 
               Cod:activitate.Cod });
                } catch(e){ 
                    return e.message; 
                    } 

}

export {createActivitate};

