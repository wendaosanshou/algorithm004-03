// bfs-递归写法
function bfs(node, visited) {
    visited.push(node)

    // process current node here
    for (let i = 0; i < node.chidren.length; i++) {
        let nextNode = node.children[i]
        if (!visited.includes(nextNode)) {
            bfs(nextNode, visited)
        }
    }
}