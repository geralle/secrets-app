const db = require('./knex')

function submitAccount(data){
  const code = generateRandomCode()
  return db('users')
    .insert({
      username: data.username,
      email: data.email,
      code: code
    })
}

function generateRandomCode(){
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++){
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return code;
}

function getUsersCode(id){
  return db.select('code').from('users').where('id',id)
}

function loggedIn(user_code){
  return db.select('*').from('users').innerJoin('users.id', 'secrets.id').where('code',user_code)
}

function getAllUsers(){
  return db.select('username').from('users')
}

function submitSecret(data){
  return db('secrets')
    .insert({
      secret: data.secret
    })
}

function whoKnows(username){
  return db('*','users.id AS user_id','secrets.id AS secrets_id').from('users').innerJoin('secrets','users.id','secrets.id').where('code',username)
}

module.exports = {
  submitAccount,
  getUsersCode,
  loggedIn,
  getAllUsers,
  submitSecret,
  whoKnows
}
