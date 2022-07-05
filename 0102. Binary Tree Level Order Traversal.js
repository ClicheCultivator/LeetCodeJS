/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const output = [];
	let nodes = root ? [root] : [];
	while (nodes.length > 0) {
		const levelValues = [];
		const children = [];
		for (const node of nodes) {
			levelValues.push(node.val);
			if (node.left) {
				children.push(node.left);
			}
			if (node.right) {
				children.push(node.right);
			}
		}
		output.push(levelValues);
		nodes = children;
	}
	return output;
};
