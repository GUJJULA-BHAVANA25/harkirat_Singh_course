/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
Idea:First we need to split the string into array of characters and then sort the array and join 
the functions we will be using:split(""), sort(), join("")
*/

function isAnagram(str1, str2) {
  const lowerCaseString1 = str1.toLowerCase().split("").sort().join("");
  
  const lowerCaseString2 = str2.toLowerCase().split("").sort().join("");

  if(sortedString1 == sortedString2){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
