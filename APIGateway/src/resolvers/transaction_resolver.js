const transactionResolver = {
    Query: {
        transactionByIdUser: (_, { userId }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.accountAPI.transactionByIdUser(userId)
            else
                return null
        }
    },
    Mutation: {
        createTransaction: (_, {transaction}, {dataSources, userIdToken}) => {
            if(transaction.userIdOrigin == userIdToken) 
                return dataSources.accountAPI.createTransaction(transaction)
            else
                return null
        }
        
    }
};


module.exports = transactionResolver;