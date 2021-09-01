<template>
  <div id="Transaction" class="transaction">
    <div class="container_transaction">
      <h2>Realizar Transacción</h2>
      <form v-on:submit.prevent="processTransaccion">
        <input
          type="text"
          v-model="createTransactionTransaction.userIdDestiny"
          placeholder="Id Usuario Destino"
        />
        <br />
        <input
          type="number"
          v-model="createTransactionTransaction.value"
          placeholder="valor"
        />
        <br />
        <button type="submit">Realizar Transacción</button>
      </form>
    </div>
  </div>
</template> 

<script>
import gql from "graphql-tag";
export default {
  name: "Transaction",
  
  data: function () {
    return {
      createTransactionTransaction: {
        userIdOrigin: localStorage.getItem("user_id"),
        userIdDestiny: "",
        value: "",
      },
    };
  },

  methods: {
    processTransaccion: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($createTransactionTransaction: TransactionInput!) {
              createTransaction(transaction: $createTransactionTransaction) {
                date
                id
                userIdDestiny
                userIdOrigin
                value
              }
            }
          `,
          variables: {
            createTransactionTransaction: this.createTransactionTransaction,
          },
        })
        .then((result) => {
          alert("Transacción Realizada de Manera Correcta, Revise Historial");
        })
        .catch((error) => {
          alert("Saldo Insuficiente o Destino Incorrecto");
        });
    },
  },
};
</script> 

<style>
.transaction {
  margin: 0;
  padding: 0%;
  height: 130%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_transaction {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.transaction h2 {
  color: #283747;
}

.transaction form {
  width: 50%;
}

.transaction input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.transaction button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

.transaction button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>
