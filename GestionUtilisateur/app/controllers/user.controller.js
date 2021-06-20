import { User } from "../models/User"

/****************************************  
    * 
    * Create new User in dataBase
    * @param req the request must contain username password role
    *   @subParam \Models\User user
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const addUser = (req, res) => {
    const user = req.body.user
    //check if object user is found
    if (!user) {
        return res.status(200).send({ success: true, message: "User object is missing" })
    }
    //create the user
    User.create(user).then((savedUser) => res.status(201).send({ success: true, site: savedUser }))
        .catch((error) => res.status(400).send({ success: false, message: error.message }))
}
/****************************************  
    * 
    * Fetch users from dataBase
    * @param req Requeset express
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const fetchUsers = (req, res) => {

    //Get and return all users 
    User.findAll().then((users) => res.status(200).send({ success: true, users: users }))
        .catch((error) => { res.status(400).send({ success: false, message: error.message }); });

}



/****************************************  
    * 
    * Fetch user from dataBase
    * @param req the request must contain
    *   @subParam Integer userId
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const fetchUser = (req, res) => {

    const userId = req.params.userid;
    //Get user with the given Id
    User.findOneByPk(userId).then(user => {

        //Check for the found user
        if (!user) {
            return res.status(404).send({success: false, message: 'User Not Found'});
        }
        res.status(200).send({success: true, user: user});
    })

}

/****************************************  
    * 
    * Update user from dataBase
    * @param req the request must contain user
    *   @subParam Integer userId
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const updateUser = (req, res) => {

    const userId = req.params.userid;
    const userN = req.params.user;

    //Get user with the given Id
    User.findOneByPk(userId).then(user => {
        
        //Check for user
        if (!user) {
            return res.status(404).send({success: false, message: 'User Not Found'});
        } //update the user with the given userN object
        user.update(userN)
            .then(() => res.status(201).send({ success: true, message: "user updated successfully" }))
            .catch((error) => res.status(400).send({ success: false, message: error.message }));
    })

}
/****************************************  
    * 
    * Delete user from dataBase
    * @param req the request must contain
    *   @subParam Integer userId
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const deleteUser = (req, res) => {

    //Get user with the given Id
    const userId = req.params.userid;
    User.findByPk(userId).then(user => {
        //Check for user
        if (user) {
            return res.status(404).send({success: false, message: 'User Not Found'});
        } //Delete the user 
        user.destroy()
            .then(() => res.status(204).send({ success: true, message: "user deleted successfully" }))
            .catch((error) => res.status(400).send({ success: false, message: error.message }));
    })

}