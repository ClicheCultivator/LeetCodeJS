/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
	// Recursion. Very similar to the max depth of binary tree problem.
	if (root === null) {
		return 0;
	}
	const children = root.children.map((e) => maxDepth(e));
	if (children.length == 0) {
		return 1;
	}
	// Remember that this is one way to get the max value in an array using reduce().
	return children.reduce((a, b) => Math.max(a, b), -Infinity) + 1;
};

// Another easier to understand way is this:
let max = 0;
for (const c of children) {
	max = Math.max(max, c);
}
return max + 1;
