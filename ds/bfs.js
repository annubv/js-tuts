module.exports = function() {
  var queue = [];
  var result = [];
  var admat = [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]]; //adjacency matrix
  var n = 4; //no, of nodes
  var startingnode = 2;

  bfs(admat, n, startingnode);
  function bfs(a, n, s) {
    var visited = [];
    queue_front = 0;
    queue_end = 0;
    for (var i = 0; i < n; i++) {
      visited.push(0);
    }
    visited[s] = 1;
    queue.push(s);
    result.push(s);

    while (queue.length > 0) {
      i = queue[0];
      queue.shift();
      for (var j = 0; j < n; j++) {
        if (visited[j] == 0 && a[i][j] == 1) {
          visited[j] = 1;
          queue.push(j);
          result.push(j);
        }
      }
    }
  }

  return result;
};
