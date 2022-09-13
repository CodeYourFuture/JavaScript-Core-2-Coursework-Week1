
const MENU = {
  burger: 6.5,
  falafel: 7.25,
};

let cashRegister = {
  // write code here
  orderFalafel: function (balance){
    if (balance >= MENU.falafel) balance-=MENU.falafel
  return balance
  },

  orderBurger: function (balance){
    if (balance >= MENU.burger) balance-=MENU.burger
  return balance
  }
}


balance = 8.25;
console.log(cashRegister.orderFalafel(balance))