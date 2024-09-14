const UserSchema = require("../Model/user.model");

const getAllUsers = async (req, res) => {
    try {
        const allUsers = UserSchema.find({});
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = UserSchema.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const createUser = async (req, res) => {
    const user = new UserSchema({
        user_name: req.body.user_name,
        user_nasc_date: req.body.user_nasc_date,
        user_cpf: req.body.user_cpf,
        user_email: req.body.user_email,
        user_cellphone: req.body.user_cellphone,
        user_role: req.body.user_role
    })

    try {
        const newUser = user.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateUser = async (req, res) => {
    try {
        let userUpdated = await UserSchema.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    user_name: req.body.user_name,
                    user_nasc_date: req.body.user_nasc_date,
                    user_cpf: req.body.user_cpf,
                    user_email: req.body.user_email,
                    user_cellphone: req.body.user_cellphone,
                    user_role: req.body.user_role
                }
            },
        );
        res.status(200).json(userUpdated)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteUser = async (req,res) => {
    let id = req.params.id
    try {
        await UserSchema.findByIdAndDelete(id)
        res.status(200).json("Wel done!")
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
