
# Pathfinding Visualization Tool

This project is a pathfinding visualization tool implemented in JavaScript. It allows users to interact with a grid where they can set start and end points, place walls, and visualize different pathfinding algorithms in action.

## Features

- **Interactive Grid**: Users can set start and end points, place walls, and adjust the grid size.
- **Pathfinding Algorithms**: Visualizes Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's algorithm, and A* search.
- **Animations**: Smooth animations to show the pathfinding process in real-time.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pathfinding-visualization.git
   ```
2. Open `index.html` in your web browser to start using the tool.

## Usage

- Click on a tile to set the start point (green) or the end point (red).
- Click and drag to create walls (black tiles).
- Choose an algorithm from the dropdown menu.
- Click "Start" to visualize the algorithm.

## Code Structure

### Constants and Utility Functions

- **Colors and Animation**: Constants for tile colors and an animation function for visited tiles.
- **Delay Function**: `delay` creates a promise that resolves after a specified time, useful for visualizing algorithm steps.

### Tile Class

The `Tile` class encapsulates properties and methods related to individual tiles in the grid.

- **Properties**: `number`, `isWall`, `row`, `col`, and `neighbors`.
- **Methods**: Getters and setters for properties, `appendNeighbors`, `handleClick`, and `createElement`.

### Global Variables

Variables to track the state of the grid, tiles, and interactions:

- **Tile States**: `startTile`, `endTile`, `previousStartTile`, `previousEndTile`.
- **Interaction States**: `isMouseDown`, `currentAlg`, `pathFindingDone`, `clickedOnToMove`.

### Grid Creation and Management

Functions to create and manage the grid and tiles:

- **Tile Creation**: `createTiles` generates the grid and tile elements.
- **Neighbor Management**: `updateNeighbors` and `updateTileNeighbors` manage the neighbors of each tile.
- **Reset Function**: `reset` clears the grid and resets state variables.
- **Random Walls**: `random` sets random walls based on a slider value.

### Event Listeners

Event listeners for interactive elements:

- **Grid Resize**: Adjusts tile size on window resize.
- **Tile Interactions**: Handlers for mouse events to set start/end tiles or walls.
- **Info Modals**: Handlers to open/close information modals.

### Pathfinding Algorithms

Implementations of various pathfinding algorithms:

- **BFS**: `bfs` and `bfsTime` implement Breadth-First Search.
- **DFS**: `dfs` and `dfsTime` implement Depth-First Search.
- **Dijkstra**: `dijkstra` and `dijTime` implement Dijkstra's algorithm.
- **A* Search**: `aStar` and `astarTime` implement A* search algorithm.

### Utility Functions for Algorithms

Helper functions used by the algorithms:

- **Graph Building**: `buildGraph` constructs a graph representation from the grid.
- **Priority Queue Management**: Functions to manage priority queues for Dijkstra and A*.
- **Heuristic Calculations**: `calculateFCost` computes heuristic costs for A*.

### Animation and Resetting

- **Animation Function**: `visitedAnimation` for smooth transitions when tiles are visited.
- **Resetting Visited Tiles**: `resetVisitedTiles` clears the color of visited tiles.

### Key Interactions

- **Mouse Events**: Handlers for clicking and dragging to place walls, start, and end tiles.
- **Algorithm Execution**: Functions to execute pathfinding algorithms and visualize the process.

## Example Usage

The grid is set up on window load, and interactions are managed through mouse events. Users can adjust the grid and run different pathfinding algorithms to see how they find the shortest path from the start to the end tile.

## Improvements and Further Steps

- **Optimization**: Code refactoring for performance and readability.
- **Additional Features**: Adding more algorithms, better UI, and saving/loading grids.
- **Testing**: Comprehensive testing to ensure robustness.

This project provides a solid foundation for an educational tool to visualize pathfinding algorithms, making it easier to understand how different algorithms explore the grid and find paths.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to all contributors and the open-source community for their invaluable support.

---

Feel free to customize the above README to fit your project's specific details and repository structure.

##Attributions and refernce

@btschneid :https://github.com/btschneid

https://github.com/pratyush103/Pathfinding-and-Sorting-Visualizer/tree/main

