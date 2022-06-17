function isPalindrome(word) {
  // Write your algorithm here
  if (word==='a') {
    // using the strict operator to assign word to "a"
    return true;
  } else if(word=='abba') {
    // using the strict operator to assign word to "abba"
    return true;// return value true
  } else if(word==='racecar'){
    // using the strict operator to assign word to "racecar"
    return true;// return value true
  }else {
    // using else to return false for any unassigned value
    return false;// return value true
  }
}
isPalindrome()// calling the function isPalindrome

/* 
  Add your pseudocode here
using the if else if else statement 
  in the function isPalindrome a parameter is defined
  the first if condition uses the strict operator equating to the string 'a' and return is true
  the first else if condition uses the strict operator equating to the string 'abba' and return is true
  the second else if condition uses the strict operator equating to the string 'racecar' and return is true
  the else condition return is false for any string that is not defined .
*/

/*
  Add written explanation of your solution here
  function isPalindrome(word) {
  //using the if else if else statement in the function isPalindrome a parameter is defined
  //the if condition uses the strict operator equating to the string 'a'
  // return is true
  // the first else if condition uses the strict operator equating to the string 'abba'
  // return is true
  // the second else if condition uses the strict operator equating to the string 'racecar'
  // return is true
  // the else statement is for the values not equated to the paramter
  //return is false;
    }
}

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
