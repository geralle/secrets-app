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

module.exports = {
  submitAccount
}
