const connection = require('../config/database');
const { getAllUser, createUser, findUser, updateUser } = require('../services/CRUDServices')

const homePage = async (req, res) => {
    const results = await getAllUser()
    res.render('check.ejs', { listUser: results })
}

const homeDev = (req, res) => {
    res.render('sample.ejs')
}

const homeAbc = (req, res) => {
    res.send('i love u <3')
}

const postCreateUser = async (req, res) => {
    let { Email, Name, City } = req.body
    // connection.query(
    //     'INSERT INTO User (email, name, city) VALUES (?,?,?)',
    //     [Email, Name, City],
    //     function(err, results) {
    //       res.send(`create user success !!`)
    //     }
    // );
    await createUser(Email, Name, City)
    res.send(`create user success !!`)
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
    const userID = req.params.id
    const results = await findUser(userID)
    res.render('edit.ejs', { userEdit: results })
}

const postUpdateUser = async (req, res) => {
    let { ID, Email, Name, City} = req.body
    await updateUser(Email, Name, City, ID)
    res.json('update success')
}

module.exports = { homePage, homeDev, homeAbc, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser }