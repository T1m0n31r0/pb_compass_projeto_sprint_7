import users from '../models/User.js';

class UserController {

    static readUsers = (req, res) => {
        users.find((err, users) => {
        res.status(200).json(users)
        })
    }

    static readUserById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            if(err) {
                res.status(400).send({message: `404 - User id not found! - ${err.message}`})
                } else {
                res.status(200).send(users);
                }
        })
    }

    static createUser = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {

            if(err) {
            res.status(500).send({message: `${err.message} - failed to create user.`})
            } else {
            res.status(201).send(user.toJSON())
            }
        })
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'User updated successfully!'})
            } else {
                res.status(500).send({message: `404 - Update failed! - ${err.message}`})
            }
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: '204 - User removed successfully'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default UserController