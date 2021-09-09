
class Solution {
    solution(givenArray) {
     var tmpArray = givenArray.map(number => {
       if ((givenArray.filter(item => item === number).length % 2) === 0) {
         return 0;
       } else {
         return number;
       }
     })
     return tmpArray.filter(item => item !== 0)[0];
   }
 }