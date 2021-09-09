class Solution {
    solution(givenArray) {
     var tmpCount = 0;   
     givenArray.map(number => {
        if (givenArray.filter(item => item === number).length === 1) {
         tmpCount+=1;
        } 
     })
     return tmpCount;
   }
 }