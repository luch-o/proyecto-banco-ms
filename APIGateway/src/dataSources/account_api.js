const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.account_api_url;    
  }

  async accountByUserId(userId){
    return await this.get(`/accounts/${userId}`);    
  }

  async createTransaction(transaction){
    transaction = new Object(JSON.parse(JSON.stringify(transaction)));
    return await this.post('/transactions', transaction);    
  }

  async transactionByIdUser(userId){
    return await this.get(`/transactions/${userId}`);
    
  }
}

module.exports = AccountAPI;