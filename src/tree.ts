import {TreeIterator} from "./treeiterator";

class Tree implements Iterable<Tree> {

    private value!: number;

    private left: Tree | null;

    private right: Tree | null;

    public get Left() : Tree | null {
        return this.left;
    }

    public get Right() : Tree | null {
        return this.right;
    }

    private set Value(v: number) {
        if (v <= 0) {
            throw new Error("value must be positive");
        }
        this.value = v;
    }

    private get Depth() : number {
        
        let leftDepth = this.left ? this.left.Depth : 0;
        let rightDepth = this.right ? this.right.Depth : 0;
        return (leftDepth < rightDepth ? leftDepth : rightDepth) + 1;
    }

    public constructor(value: number) {
        this.Value = value;
        this.left = null;
        this.right = null;
    }

    [Symbol.iterator](): Iterator<Tree, any, any> {
        return new TreeIterator(this);
    }

    public get Value() : number {
        return this.value;
    }

    public Add(v: number): void {
        if (!this.left)
            this.left = new Tree(v);
        else if (!this.right)
            this.right = new Tree(v);
        else if (this.left.Depth <= this.right.Depth)
            this.left.Add(v);
        else
            this.right.Add(v);
    }

    public Display(d: number = 0) : void {
        if (this.left) {
            this.left.Display(d + 1);            
        }
        for (let i = d; i > 0; i--) {
            console.log(' ');
        }
        console.log(this.value);
        if (this.right) {
            this.right.Display(d + 1);
        }    
    }

    public Equals(otherTree: Tree) : boolean {
        if (!otherTree) {
            return false;
        }
        return this.value == otherTree.value;
    }

    public ToString(): string {

        const leftStr = this.left?.ToString();
        const rightStr = this.right?.ToString();

        return `${this.value}(${leftStr}, ${rightStr})`;

    }
}

export { Tree }