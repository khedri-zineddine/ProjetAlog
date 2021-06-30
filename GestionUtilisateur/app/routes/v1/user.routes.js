import { Router } from "express"
import { UserController } from '../../controllers'
const userRoutes = Router()
userRoutes.post('/add-user', UserController.addUser)
userRoutes.get('/get-users', UserController.getUsers)
userRoutes.get('/get-user/:userId', UserController.getUser)
userRoutes.delete('/delete-user', UserController.deleteUser)
userRoutes.put('/update-user', UserController.updateUser)
export { userRoutes }
