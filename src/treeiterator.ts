import {Tree} from "./tree";

class TreeIterator implements Iterator<Tree> {

    private traversal : Tree[];

    private i : number;

    constructor(input: Tree) {
        this.traversal = [];
        this.i = 0;
        this.inOrder(input);
    }

    next(...[value]: [] | [any]): IteratorResult<Tree, any> {
        if (this.i >= this.traversal.length) {
            return {
                done: true,
                value: undefined
            }
        }

        const temp : Tree = this.traversal[this.i];
        this.i++;
        return {
            done: false,
            value: temp
        }
    }

    private inOrder(tree: Tree) {
        if (tree.Left) {
            this.inOrder(tree.Left);
        }
        this.traversal.push(tree)
        if (tree.Right) {
            this.inOrder(tree.Right)
        }
    }

}

export {TreeIterator}