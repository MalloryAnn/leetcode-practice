/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numbers = new Set(nums);
    let longest = 0;
    for (let num of numbers){
        if (!numbers.has(num-1)){
            let currentNum = num;
            let currentStreak = 1;
            while (numbers.has(currentNum +1)){
                currentNum++;
                currentStreak++;
            
            }
            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
}