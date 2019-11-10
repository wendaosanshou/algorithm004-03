// dfs的递归写法
function dfs(node, visited) {
    // terminator
    if (visited.include(node)) {
        return
    }
    visited.push(node)
    // process current node here
    for (let i = 0; i < node.children.length; i++) {
        let nextNode = node.children[i]
        if (!visited.include(nextNode)) {
            dfs(nextNode, visited)
        }
    }
}

// dfs的非递归写法
function dfs2(self, tree) {
    if (!tree.root) {
        return []
    }
    let visited = []
    let stack = [tree.root]
    while(stack.length > 0) {
        let node = stack.pop()
        visited.push(node)
        // process node
        process(node)
        let nodes = generate_related_nodes(node)
        stack.push(nodes)
    }
}
