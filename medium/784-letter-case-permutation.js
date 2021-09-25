/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    s = s.toLowerCase()
    var len = s.length, ans = []
    const dfs = (i, res='') => {
        if (i < len) {
            dfs(i+1, res + s[i])
            if (s[i] >= 'a') dfs(i+1, res + s[i].toUpperCase())
        } else ans.push(res)
    }
    dfs(0)
    return ans;
};