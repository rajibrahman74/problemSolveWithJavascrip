// Problem: 01 (Let’s play a mind game).

// The function takes a positive number as input, performs the arithmetic operations described in the problem statement (that is, multiplies the input by 3, adds 10, divides by 2, and subtracts 5) and returns the result.

function mindGame(number) {
  if (typeof number !== "number") {
    return "Please enter number";
  }
  if (number < 0) {
    return "Please enter a any positive number";
  }

  const firstCondition = number * 3;
  const secondCondition = firstCondition + 10;
  const thirdCondition = secondCondition / 2;
  const getResult = thirdCondition - 5;

  return getResult;
}







// Problem: 02 (Finding even or odd).

// This function takes a string as input and returns whether the total number of characters in the string is even or odd.

function evenOdd(string) {
  if (typeof string !== "string") {
    return "Please enter valid value";
  }

  const text = string;
  if (text.length % 2 != 1) {
    return "even";
  } else {
    return "odd";
  }
}






// Problem: 03 (Is Less or Greater than seven).

// The task is to write a function "isLGSeven()" that takes a number as input and calculates the difference between the input and 7. If the difference is less than 7, the function will return the difference. Otherwise, the function will return double the input value.

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Please enter valid value";
  }

  const result = number - 7;
  if (result < 7) {
    return result;
  } else {
    const get2x = number * 2;
    return get2x;
  }
}






// Problem: 04 (Finding Bad data).

// This function takes an array as input and loops through all elements of the array. If an element is less than 0, the counter badDataCount is incremented. Finally, the function returns the count of bad data elements in the array.

function findingBadData(data) {
  if (!Array.isArray(data)) {
    return "Please enter valid value";
  }

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const elements = data[i];

    if (typeof elements !== "number") {
      return "Please enter an array with numbers";
    }

    if (elements < 0) {
      count++;
    }
  }
  return count;
}






// Problem: 05 (Convert your gems into diamond).

// The work of this function is that it will take three numbers as input and three friends will have different values of games and will return how many diamonds will be in all the gems and if the diamond is more than 2000 then 2000 will be subtracted from it and it will return. AS SIMPLE AS THAT.

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  if (
    typeof firstFriendGems !== "number" ||
    typeof secondFriendGems !== "number" ||
    typeof thirdFriendGems !== "number"
  ) {
    return "Please enter number";
  }

  if ((firstFriendGems, secondFriendGems, thirdFriendGems < 0)) {
    return "Please enter positive value";
  }

  const firstFriendGemsPower = 21;
  const secondFriendGemsPower = 32;
  const thirdFriendGemsPower = 43;

  const firstFriendTotalDiamonds = firstFriendGemsPower * firstFriendGems;
  const secondFriendTotalDiamonds = secondFriendGemsPower * secondFriendGems;
  const thirdFriendTotalDiamonds = thirdFriendGemsPower * thirdFriendGems;

  const allFriendsTotalDiamonds =
    firstFriendTotalDiamonds +
    secondFriendTotalDiamonds +
    thirdFriendTotalDiamonds;

  if (2000 < allFriendsTotalDiamonds) {
    const getTotal = allFriendsTotalDiamonds - 2000;
    return getTotal;
  } else {
    return allFriendsTotalDiamonds;
  }
}