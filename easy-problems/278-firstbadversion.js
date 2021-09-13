var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left_node = 1;
        var right_node = n;
        while(left_node<right_node) {
            var mid = Math.floor((left_node + right_node)/2);
            if(isBadVersion(mid)) {
                right_node = mid;
            } else {
                left_node = mid + 1;
            }
        }
        return left_node;
    };
};