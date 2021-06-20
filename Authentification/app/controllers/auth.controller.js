import { User } from "../models/User"

/****************************************  
    * 
    * Login to the application
    * @param req the request must contain username and password
    *   @subParam \Models\User user
    * @param res Response express
    * @return message sucess && token 
    * 
****************************************/
export const Login = (req, res) => {

    //Extract the login credentials from the request body
    const { username, password } = req.body;

    //Check if all credentials are set
    if (!username || !password) {
        res.status(400).send({ success: false, error: "Please provide and email and password" })
    }
    
    else {
        const user = await User.findOne({ where: { username: username} })

        //Check for user existance
        if (!user) {
            res.status(401).send({ success: false, error: "Invalid credentials" })
        } else {
            //Validating the password
            const valid_pwd = await bcrypt.compare(password, user.pwd);

            if (!valid_pwd) {

                res.status(401).send({ success: false, error: "Invalid credentials" })

            } else {

                //Signing the webtoken to return
                const token = jwt.sign({ id: user.idLocataire, role: user.role }, process.env.JWT_SECRET);
                res.send({ success: true, token: token });
            }
        }
    }
}
