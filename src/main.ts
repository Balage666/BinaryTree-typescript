import { Tree } from "./tree";

let tree : Tree = new Tree(20);

tree.Add(10);
tree.Add(30);
tree.Add(5);
tree.Add(15);
tree.Add(25);

// let tree2 : Tree = new Tree(20);

//console.log(tree);

//console.log('Hello, world!')

for(const {Value} of tree) {
	console.log(Value);
}