//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./account_type_def');
const transactionTypeDefs = require('./transaction_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [accountTypeDefs, transactionTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 
