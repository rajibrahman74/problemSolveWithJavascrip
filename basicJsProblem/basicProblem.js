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
// Third 100 person or more = 3000/-

/*
function picnicBudget(totalPerson) {
  const picnicBudgetFirst100Person = 5000;
  const picnicBudgetSecond100Person = 4000;
  const picnicBudgetRestPerson = 4000;
  if (totalPerson <= 100) {
    const totals = totalPerson * picnicBudgetFirst100Person;
    return totals;
  } else if (totalPerson <= 200) {
    const first100 = 100 * picnicBudgetFirst100Person;
    const restPerson = totalPerson - 100;
    const second100 = restPerson * picnicBudgetSecond100Person;
    const totals = first100 + second100;
    return totals;
  } else {
    const first100 = 100 * picnicBudgetFirst100Person;
    const second100 = 100 * picnicBudgetSecond100Person;
    const restPerson = totalPerson - 200;
    const restTotalPerson = restPerson * picnicBudgetRestPerson;
    const totals = first100 + second100 + restTotalPerson;
    return totals;
  }
}

const totals = picnicBudget(101);
console.log(totals);
*/

// An alternative solution to problem 3 is given below.

// Problem 03: PICNIC TOTAL BUDGET CALCULAATION!
// first 100 person = 5000/-
// Second 100 person = 4000/-
// Third 100 person or more = 3000/-

/*
function picnicBudget(totalPerson) {
  if (totalPerson <= 100) {
    const total = totalPerson * 5000;
    return total;
  } else if (totalPerson <= 200) {
    const total = totalPerson * 4000;
    return total;
  } else if (totalPerson < Infinity) {
    const total = totalPerson * 3000;
    return total;
  }
}

const totals = picnicBudget(101);
console.log(totals);
*/

// Problem 04: FIND ODD FRIND NAME!

/*
function oddFriend(names) {
  let oddName = " ";
  for (let i = 0; i < names.length; i++) {
    const elements = names[i];
    if (elements.length % 2 != 0) {
      oddName = elements;
      return oddName;
    }
  }
}
let friendsName = ["Mehedi", "Talha", "Nabil", "Coyon"];
let friend = oddFriend(friendsName);
console.log(friend);
*/