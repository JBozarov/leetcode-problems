In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or 
more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false´
Explanation: No possible partition.
Example 3:

Input: deck = [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: deck = [1,1]
Output: true
Explanation: Possible partition [1,1].



var hasGroupsSizeX = function(deck) {
    if (deck.length>=2 && deck.length%2 === 0 && deck.every(v => v === deck[0])) return true; 
    else if (deck.length<2 || deck.length%2 !== 0 || deck.every(v => v === deck[0])) return false;
    var count = {}; 
    deck.forEach(i => {
       count[i] = (count[i] || 0) + 1; 
    })
    var arr = Object.values(count); 
    return ( arr.length>=2 && arr.every(v => v === arr[0]) )
};


console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
