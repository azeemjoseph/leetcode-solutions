/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let rows = mat.length;
    let columns = mat[0].length;
    // console.log("rows", rows, "columns", columns)
    // scan from top left to bottom right
    const scanMatrixFromTopLeft = (mat) => {
        for(let g=0; g<rows; g++){
             for(let k=0; k<columns; k++){
                 if( mat[g][k] > 0 ) {
                     mat[g][k] = Infinity; // becasue at this time we do not know what is the minimum dist so a maximum value
                    if( g > 0 )
                        mat[g][k] = Math.min( 
                                        mat[g][k], mat[g-1][k] + 1);
                     if( k > 0 )
                        mat[g][k] = Math.min( 
                                        mat[g][k], mat[g][k-1] + 1
                                       ) 
                                    ;   
                    // console.log("g, k", g, k, "&&&&", mat[g][k])             
                 }
             }
        }
    }
    
    const scanMatrixFromBottomRight = (mat) => {
        for(let g=(rows-1); g>=0; g--){
             for(let k=(columns-1); k>=0; k--){
                 if( mat[g][k] > 0 ) {
                    if( (g+1) < rows )
                        mat[g][k] = Math.min( 
                                        mat[g][k], mat[g+1][k] + 1);
                     if( (k+1) < columns )
                        mat[g][k] = Math.min( 
                                        mat[g][k], mat[g][k+1] + 1
                                       ) 
                                      
                 }
             }
        }
    }
    
    scanMatrixFromTopLeft(mat);
    scanMatrixFromBottomRight(mat);
    return mat; 
};