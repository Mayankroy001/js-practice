let Bank = (function() {

 let balance = 120000;

  function checkBalance() {
    return balance;
  }

function setBalance(value) {
  balance = value;
}

function withDraw(value){
    if(value <= balance) {
        balance -= value;
        console.log("Withdraw : " + value);
        
    }
}
   
return {
    checkBalance,
    setBalance,
    withDraw
};
})()
