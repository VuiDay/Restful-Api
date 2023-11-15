const connection = require('../config/database');

const getAllUser = async()=> {
    const [results, fields] = await connection.query('SELECT * FROM User')
    return results
}

const createUser = async(Email, Name, City)=> {
    const [results, fields] = await connection.query('INSERT INTO User (email, name, city) VALUES (?,?,?)', [Email, Name, City])
    return results
}

const findUser = async(UserID)=>{
    const [results, fields] = await connection.query('select * from `User` u where id = ?', [UserID])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUser = async(Email, Name, City, UserID)=> {
    await connection.query('update User set email = ?, name = ?, city = ? where id = ?', [Email, Name, City, UserID])
}

module.exports = {getAllUser, createUser, findUser, updateUser}