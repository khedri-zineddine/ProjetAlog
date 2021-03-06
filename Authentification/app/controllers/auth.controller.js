import { User } from "../models/User"

const bcrypt = require('bcrypt')


export class AuthController {
    /****************************************  
        * 
        * Login to the application
        * @param req the request must contain username and password
        *   @subParam \Models\User user
        * @param res Response express
        * @return message sucess && token 
        * 
    ****************************************/
    static login = async (req, res) => {

        //Extract the login credentials from the request body
        const { username, password } = req.body;

        //Check if all credentials are set
        if (!username || !password) {
            res.status(400).send({ success: false, error: "Please provide and email and password" })
        }

        else {
            const user = await User.findOne({ where: { userName: username } })

            //Check for user existance
            if (!user) {
                res.status(401).send({ success: false, error: "Invalid credentials" })
            } else {
                //Validating the password
                const valid_pwd = await bcrypt.compare(password, user.password);

                if (!valid_pwd) {

                    res.status(401).send({ success: false, error: "Invalid credentials" })

                } else {

                    //Signing the webtoken to return
                    const token = user.idUser
                    res.send({ success: true, token: token });
                }
            }
        }
    }
}
