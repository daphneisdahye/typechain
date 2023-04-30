import crypto from "crypto";

interface BlockShape {
    hash:string;
    prevHash:string;
    height: number;
    data:string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash=`${prevHash}${height}${data}`
         return crypto.createHash("sha256").update(toHash).digest("hex") //hex:16진수로 이루어진 해시값 반환
    }
}

class Blockchain {
    private blocks: Block[] //정의(undefined)
    constructor(){
        this.blocks=[];  //빈배열로 초기화
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1].hash; // -1은 마지막 요소의 인덱스, 즉 마지막 해시 리턴
    }
    public addBlock(data:string){
        const newBlock=new Block(this.getPrevHash(),this.blocks.length+1,data)
        this.blocks.push(newBlock)
    }
    public getBlocks(){
        return [...this.blocks]  //복제된 배열을 반환(원래배열이아님)
    }
}   

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());