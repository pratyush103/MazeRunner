////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Algorithms
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let visitedTiles = [] //used to keep track of tiles that have been visited during some algorithm execution

//builds a graph data structure
//set of steps that create a map showing which tiles are next to each other
const buildGraph = () => {
  const graph = {};

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    graph[tile.number] = [];
    
    for (let j = 0; j < tile.neighbors.length; j++) {
      const neighbor = tile.neighbors[j];
      graph[tile.number].push(neighbor.number);
    }
  }
  return graph;
}
//used to change the color of visited tiles
const resetVisitedTiles = () => {
  for (let i = 0; i < visitedTiles.length; i++) {
    if (visitedTiles[i].number !== startTile && visitedTiles[i].number !== endTile) {
      visitedTiles[i].element.style.backgroundColor = 'white';
    }
  }

  visitedTiles = [];
}

// check to make sure you have a starting tile and an ending tile.
const checkToStart = () => {
  return (endTile > -1 && startTile > -1);
}