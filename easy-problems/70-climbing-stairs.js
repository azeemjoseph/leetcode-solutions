/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let stack = [];
    stack.push(1);
    stack.push(2);
    let current_steps = 3;
    let current_combinations = 0;
    while (current_steps <= n) {
        let previous = stack.pop();
        let previous2 = stack.pop();
        current_combinations = previous + previous2;
        stack.push(previous);
        stack.push(current_combinations);
        current_steps++
    }
    return current_combinations
};



/**
 * @param {number} n
 * @return {number}
 */
/*
 var climbStairs = function (n) {
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp[n];
  };
*/  