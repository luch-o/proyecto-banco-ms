<template>

</template>

<script>

</script>

<style>
  body{
    margin: 0 0 0 0;
  }

  .header{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100px;
    margin: 0%;
    padding: 0;

    background-color: #283747 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
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

  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }
 
  .footer{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 75px;

    background-color: #283747;
    color: #E5E7E9;
  }

  .footer h2{
    margin: 0px;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
