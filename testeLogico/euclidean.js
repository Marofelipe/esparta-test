class Solution {
    solution(M, N) {
        var position = 0;
        var cholocates = [];
        var count = 0;
        for (var index = 0; index < N - 1 ;index++) {
            cholocates.push(0);
        }
        while (cholocates[position] != 1) {
            console.log('ok');
            cholocates[position] = 1;
            position+= M - 1;
            count++;
        }
        return count
    }
}