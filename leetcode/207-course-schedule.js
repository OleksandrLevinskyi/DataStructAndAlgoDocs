// TIME: O(n + e)
// SPACE: O(n + e)
const canFinish = (numCourses, prerequisites) => {
    const graph = {};
    const visited = new Set();

    // create an adjacency map for a graph
    for (let p of prerequisites) {
        if (!graph[p[0]]) {
            graph[p[0]] = [];
        }

        graph[p[0]].push(p[1]);
    }

    for (let i = 0; i < numCourses; i++) {
        // if at least one course is impossible to complete, return false
        if (!dfs(i, graph, visited)) {
            return false;
        }
    }

    return true;
}

const dfs = (node, graph, visited) => {
    if (!graph[node]) {
        return true;
    }

    if (visited.has(node)) {
        return false;
    }

    visited.add(node);

    // loop over all the adjacent nodes
    for (let n of graph[node]) {
        if (!dfs(n, graph, visited)) {
            return false;
        }
    }

    visited.delete(node);
    delete graph[node];

    return true;
}
