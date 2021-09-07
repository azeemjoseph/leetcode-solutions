var longestCommonPrefix = function (s) {
    let longestPrefix = ""
    if(s === null || s.length === 0) return longestPrefix;
    let len = s[0].length;

    for (let i=0; i < len; i++){ 
        const first_character = s[0][i];
        for (let j = 1; j < s.length; j++){ 
            if(s[j][i] !== first_character) return longestPrefix;
        }
        longestPrefix = longestPrefix + first_character;
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
