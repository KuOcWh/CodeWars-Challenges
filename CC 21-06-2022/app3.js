//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    let lowered = x.toLowerCase()
    console.log(lowered)
    
    let reversedStr = x.split('').reverse().join('')
    let revLowered = reversedStr.toLowerCase()
    if(lowered === revLowered ){
      return true
    }else{
      return false
    }
  }

// if case sensetivity wasn't an issue 
  // const isPalindrome = s => === s.split('').reverse.join('') ? console.log('true) : console.log('false')