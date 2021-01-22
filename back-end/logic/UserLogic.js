import Utilizator from '../models/User.js';
function validateUser(user) {
    if (!user || Object.entries(user).length === 0)
        return { hasErrors: true, message: "You must provide user information!" };
    if (!user.Password) {
        return { hasErrors: true, message: "The user must have a password!" };
    }
    if (!user.Email) {
        return { hasErrors: true, message: "You must provide an email!" };
    }
}
async function createUser(RolId, user) {
    let error = validateUser(user);
    if (error.hasErrors) {
        return error.message;
    }
    else {
        return await Utilizator.create({
            Email: user.Email,
            Password: user.Password,
            RolId: RolId
        });
    }
}

async function getUsers() {
    try {
        return await Utilizator.findAll();
    }
    catch (e) {
        return e.message;
    }
}
async function getUserById(id) {
    try {
        return await Utilizator.findByPk(id);
    }
    catch (e) {
        return e.message;
    }
}
async function updateUser(id, user) {
    let updateElem = await Utilizator.findByPk(id);
    let error = validateUser(user);
    if (!updateElem)
        return { hasErrors: true, message: "Nu exista un user cu acest id!" };

    if (error.hasErrors) {
        return error.message;
    }
    return await updateElem.update(user);

}
async function deleteUser(id) {
    let deleteElem = await Utilizator.findByPk(id);
    if (!deleteElem)
        return{ hasErrors: true, message: "Nu exista utilizator cu acest id" };

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
        else if (e.message.includes("FK_User_Feedback")) {
            return "Utilizatorul nu poate fi sters, fiindca a dat feedback!"
        }


        else throw (e);
    }
}
export {createUser,getUsers,getUserById,updateUser,deleteUser};