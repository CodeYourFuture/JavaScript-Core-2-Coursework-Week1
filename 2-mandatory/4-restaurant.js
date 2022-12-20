/*
  You are at a restaurant that has two items on the menu, burger and falafel.
  The menu object includes these two items and their price.

  You have an object cashRegister which handles charging for ordered items but it is missing some methods to do this.

  Add a method to the cashRegister object
    - the method name should be orderBurger
    - the method should take one argument called balance, which is a number
    - the method should check if there is enough money in the balance to order a burger (i.e. will the balance be greater than or equal to 0 if the burger is ordered)
    - if there is enough money in the balance to order the burger, then the price of the burger should be subtracted from the balance
    - the method should return the new balance

  Add another method to the cashRegister object which is called orderFalafel and handles ordering a falafel, in the same way as ordering a burger.
*/

const MENU = {
  burger: 6.5,
  falafel: 7.25,
};

let cashRegister = {
  // write code here
  orderBurger : function (balance){
                  if (balance>=MENU.burger){
                    return balance = balance - MENU.burger
                  }
                  return balance
                },
  orderFalafel : function (balance){
                  if (balance>=MENU.falafel){
                    return balance - MENU.falafel
                  }
                  return balance
                }
}

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 4-restaurant.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("orderBurger subtracts 6.5 from balance", () => {
  let balance = 6.5;
  expect(cashRegister.orderBurger(balance)).toEqual(0);
});

test("orderFalafel subtracts 7.25 from balance", () => {
  let balance = 7.25;
  expect(cashRegister.orderFalafel(balance)).toEqual(0);
});

test("orderBurger will not subtract from balance if balance is too low", () => {
  let balance = 6.49;
  expect(cashRegister.orderBurger(balance)).toEqual(6.49);
});

test("orderFalafel will not subtract from balance if balance is too low", () => {
  let balance = 7.24;
  expect(cashRegister.orderFalafel(balance)).toEqual(7.24);
});
