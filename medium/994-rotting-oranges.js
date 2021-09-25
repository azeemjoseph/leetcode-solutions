/** solution 1
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
	const getRotten = () => {
		let [start, fresh] = [[], 0];

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] === 2) start.push([i, j]);
				else if (grid[i][j] === 1) fresh++;
			}
		}

		return [start, fresh];
	};

	const directions = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];
	let [start, fresh] = getRotten();
	let queue = [...start]; // there can be mutiple rotten
	let output = 0;
	
	// while fresh fruits are left && queue
	while (fresh && queue.length) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			const [row, col] = queue.shift();

			for (const [dx, dy] of directions) {
				const x = row + dx;
				const y = col + dy;

				// if invaid continue
				if (x < 0 || x >= grid.length) continue;
				if (y < 0 || y >= grid[0].length) continue;
				if (grid[x][y] === 0 || grid[x][y] === 2) continue;

				queue.push([x, y]);
				grid[x][y] = 2;
				fresh--;
			}
		}

		output++;
	}

	return fresh === 0 ? output : -1;
};














//#solution 2
 
/**
 * @param {number[][]} grid
 * @return {number}
 */
/* 
 var orangesRotting = function(grid) {
  if(grid.length === 1 && grid[0].length === 1) {
        if(grid[0][0] === 1) return -1
        else return 0
    }
    
    let queue = []
    let fresh = 0
    let id = 0
    let result
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 2) queue.push([i,j,id])
            if(grid[i][j] === 1) fresh++
        }
    }
    
    while(queue[0]) {
        let [row, column, id] = queue.shift()
        
        if(grid[row - 1] && grid[row - 1][column] === 1) {
            grid[row - 1][column] = 2
            queue.push([row - 1,column,id + 1])
            fresh--
        }
        if(grid[row][column - 1] && grid[row][column - 1] === 1) {
            grid[row][column - 1] = 2
            queue.push([row,column-1,id + 1])
            fresh--
        }
        if(grid[row][column + 1] && grid[row][column + 1] === 1) {
            grid[row][column + 1] = 2
            queue.push([row,column + 1,id + 1])
            fresh--
        }
        if(grid[row + 1] && grid[row + 1][column] === 1) {
            grid[row + 1][column] = 2
            queue.push([row + 1,column,id + 1])
            fresh--
        }
        result = id
    }
    
    return fresh > 0 ? -1 : result
    }; */