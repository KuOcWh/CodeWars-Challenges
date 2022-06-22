//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//For example:

//1.08 --> 30
//Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


function cockroachSpeed(s) {
    //Good Luck!
    
    
    //the sum for converting km per hour to cm per second
    let result = s * 27.778
    
    //return the result floored.
    return Math.floor(result)
  }