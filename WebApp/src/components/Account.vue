<template>
  <div id="Account">
    <div class="container">
      <h2>
        Titular Cuenta: <span>{{ username }}</span>
      </h2>
      <h2>
        Saldo: <span>${{ accountByUserId.balance }} COP</span>
      </h2>
      <h2>
        Fecha Ultimo Movimiento:
        <span>{{ accountByUserId.lastChange.substring(0, 10) }}</span>
      </h2>
      <h2>
        Hora Ultimo Movimiento:
        <span>{{ accountByUserId.lastChange.substring(11, 19) }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Account",

  data: function () {
    return {
      username: "none",
      accountByUserId: { balance: "null", lastChange: "null" },
    };
  },

  created: function () {
    this.username = this.$route.params.username;
  },

  apollo: {
    accountByUserId: {
      query: gql`
        query ($accountByUserIdUserId: String!) {
          accountByUserId(userId: $accountByUserIdUserId) {
            balance
            lastChange
            userId
          }
        }
      `,
      variables() {
        return { accountByUserIdUserId: localStorage.getItem("user_id") };
      },
    },
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}

.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100px;
  margin: 0%;
  padding: 0;

  background-color: #283747;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}

.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;

  background: #fdfefe;
}

.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 75px;

  background-color: #283747;
  color: #e5e7e9;
}

.footer h2 {
  margin: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
