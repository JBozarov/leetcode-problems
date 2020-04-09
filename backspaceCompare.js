Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".




var backspaceCompare = function(S, T) {
    var sarrays = S.split('')
    var tarrays = T.split('')
    
    function looper (arr){
      for (var i=0; i<arr.length;i++){
         if (arr[0] === '#'){
            arr.shift(); 
         }
         if (arr[i]==='#'){
         arr.splice(i-1, 2); 
         i=0
         }
      }
       return arr; 
    }

    let sresult = looper(sarrays).join(''); 
    let tresult = looper(tarrays).join(''); 

    console.log(sresult)
    console.log(tresult)

    return sresult === tresult; 
};


console.log( backspaceCompare('a##c', '#a#c') )
