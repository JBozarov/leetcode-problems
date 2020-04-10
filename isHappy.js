var isHappy = function(n) {
   var numbers = [];

   function foo (n){
      var res = n.toString().split('').map(v => Math.pow(Number(v), 2)).reduce((a, b) => a+b);  

      console.log(numbers)

      if (numbers.includes(res)){
         console.log(numbers, res)
         return false; 
      }
      if ( res === 1 ) {
         return true
      }
      
      else {
         numbers.push(res)
         console.log(numbers)
         return foo(res)
      }
   }
   return foo(n); 
};
