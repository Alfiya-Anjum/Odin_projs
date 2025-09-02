function levelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let node = queue.shift();  // take from front
    result.push(node.val);

    if (node.left) queue.push(node.left);   // add left child
    if (node.right) queue.push(node.right); // add right child
  }

  return result;
}
