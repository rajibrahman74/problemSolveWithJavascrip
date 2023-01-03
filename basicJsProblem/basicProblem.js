/* If you want to execute this code, 
             please comment out it first. step by step */


// Problem 01: ANA TO VORI!
// We Know, 16 Ana = 1 Vori;

/*
function anaToVori(ana) {
  const vori = ana / 16;
  return vori;
}
const totalVori = anaToVori(144);
console.log(totalVori);
*/




// Problem 02: COUNT PRODUCT TOTAL PRICE pandaCost!
// per singgara = 7/-
// per somoca = 10/-
// per jilapi = 15/-

/*
function pandaCost(singgaraQuantity, somocaQuantity, jilapiQuantity) {
  const singgaraPrice = 7;
  const somocaPrice = 10;
  const jilapiPrice = 15;

  //   PRODUCT AND PRICE CALCULATION
  const totalSingaraPrice = singgaraPrice * singgaraQuantity;
  const totalSomocaPrice = somocaPrice * somocaQuantity;
  const totalJilapiPrice = jilapiPrice * jilapiQuantity;

  const totalPrice = totalSingaraPrice + totalSomocaPrice + totalJilapiPrice;
  return totalPrice;
}
let totalAmount = pandaCost(1, 1, 5);
console.log(totalAmount);
*/




// Problem 03: PICNIC TOTAL BUDGET CALCULAATION!
// first 100 person = 5000/-
// Second 100 person = 4000/-
// Third 100 person or more = 5000/-

// function picnicBudget (totalPerson) {

// }






// Problem 04: FIND ODD FRIND NAME!

/*
function oddFriend(names) {
  let oddName = [];
  for (let i = 0; i < names.length; i++) {
    const elements = names[i];
    if (elements.length % 2 != 0) {
      oddName.push(elements);
      return oddName;
    }
  }
}
let arr = ["Mehedi", "Talha", "Nabil", "Coyon"];
let friendsName = oddFriend(arr);
console.log(friendsName);
*/