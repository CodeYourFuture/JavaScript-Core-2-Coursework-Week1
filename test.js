
const MENU = {
  burger: 6.5,
  falafel: 7.25,
};

let cashRegister = {
  orderBurger: function(balance) {
    let change = balance-MENU.burger
    if (change >= 0) {
      balance = change
      
    }
    return balance
    
    
  },
  orderFalafel: function(balance) { 
    let change = balance-MENU.falafel
    if (change >= 0) {
      balance = change;
      
      
    }
    return balance
  },
  
}

console.log(cashRegister.orderFalafel(7.24))
console.log(cashRegister.orderBurger(6.49))