const MENU = {
  burger: 6.5,
  falafel: 7.25,
};

let cashRegister = {
  orderBurger: function(balance) {
    this.balance = balance;
    //console.log(cashRegister)
    if (balance >= MENU.burger) {
        return balance = balance-MENU.burger
    }   
  }
}

//cashRegister
console.log(cashRegister.orderBurger(7))

