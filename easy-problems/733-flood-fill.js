/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image
   dfs(image, sr, sc, image[sr][sc], newColor)
   return image
};

function dfs(image, sr, sc, oldColor, newColor) {
   if (sr < 0 || sr >= image.length) return 
   if (sc < 0 || sc >= image[0].length) return
   if (image[sr][sc] !== oldColor) return
   image[sr][sc] = newColor
   dfs(image, sr+1, sc, oldColor, newColor)
   dfs(image, sr-1, sc, oldColor, newColor)
   dfs(image, sr, sc+1, oldColor, newColor)
   dfs(image, sr, sc-1, oldColor, newColor)
}    
