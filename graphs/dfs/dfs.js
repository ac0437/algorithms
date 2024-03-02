// https://favtutor.com/blogs/depth-first-search-python
let graph = {
    '5': ['3', '7'],
    '3': ['2', '4'],
    '7': ['8'],
    '2': [],
    '4': ['8'],
    '8': []
}

let visited = new Set();

function dfs(visited, graph, node) {
    if(!visited.has(node)) {
        console.log(node);
        visited.add(node);
        for(let i = 0; i < graph[node].length; i++) {
            dfs(visited, graph, graph[node][i]);
        }
    }

    return visited;
}

console.log(dfs(visited, graph, '5'))