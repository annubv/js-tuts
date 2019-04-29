module.exports = function() {
  var stack = [];
  var result = [];
  var admat = [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]]; //adjacency matrix
  var n = 4; //no, of nodes
  var startingnode = 3;

  dfs(admat, n, startingnode);

  function dfs(a, n, s) {
    var flag = false; //fully visited
    var visited = [];
    for (var i = 0; i < n; i++) {
      visited.push(0);
    }
    visited[s] = 1;
    result.push(s);
    stack.push(s);
    while (stack.length > 0) {
      flag = false;
      i = stack[stack.length - 1];
      for (var j = 0; j < n; j++) {
        if (visited[j] === 0 && admat[i][j] === 1) {
          visited[j] = 1;
          stack.push(j);
          result.push(j);
          flag = true;
          break;
        }
      }
      if (flag == false) {
        stack.pop(); //fully visited
      }
    }
  }

  return result;
};
