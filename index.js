function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;
  
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

/* 
  Add your pseudocode here
1.Convert the word to lower case
2.Reverse the word
3.Compare the reversed word to the original word
4.If they are the same, return true, otherwise return false.
*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes a single string parameter and returns true if the string is a palindrome and false if it is not. 
  It does this by checking if the string is equal to its reversed version.
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
