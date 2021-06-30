import { User } from "../models/User"
const bcrypt = require("bcrypt")


export class UserController {
    static addUser = async (req, res) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        try {
            let user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                password: hash,
                typeUser: 'userSimple'
            }
            let result = await User.create(user)
            res.status(200).send({ success: true, message: "User created successfuly" })
        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
    static getUsers = async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).send({ success: true, users })
        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
    static getUser = async (req, res) => {
        try {
            const user = await User.findByPk(req.params.userId)
            res.status(200).send({ success: true, user })
        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
    static deleteUser = async (req, res) => {
        try {
            const user = await User.findByPk(req.body.userId)
            const isDeleted = await user.destroy()
            res.send({ success: true, message: "User deleted successfully" })
        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
    static updateUser = async (req, res) => {
        try {
            const user = await User.findByPk(req.body.userId)
            const isUpdated = await user.update(req.body)
            res.status(200).send({ success: true, message: "User updated successfully" })

        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
}
