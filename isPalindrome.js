determine if x is palindrome 


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false; 
    let rev = Number(x.toString().split("").reverse().join("")); 
    return x===rev 
};
