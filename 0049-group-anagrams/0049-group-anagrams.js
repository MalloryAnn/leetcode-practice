/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();

    for (const word of strs){
        const key = word.split('').sort().join('');
        if (!groups.has(key)) {
            //new grp 
            groups.set(key, []);

        }
        //current word
        groups.get(key).push(word);

        
    }
    //return everything
    return Array.from(groups.values());
    
};