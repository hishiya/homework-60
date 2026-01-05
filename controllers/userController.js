const getAllUsers = (req, res) => {
    res.send('Get all users');
}

const getUserById = (req, res) => {
    const userId = req.params.userId
    res.send(`Get user with ID: ${userId}`)
}

const createUser = (req, res) => {
    res.send('create a new user');
}

const updateUser = (req, res) => {
    const userId = req.params.userId
    res.send(`Update user with ID: ${userId}`)
}

const deleteUser = (req, res) => {
    const userId = req.params.userId
    res.send(`Delete user with ID: ${userId}`)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}