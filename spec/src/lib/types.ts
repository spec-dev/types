export type StringKeyMap = { [key: string]: any }

export type StringMap = { [key: string]: string }

export type Address = string

export type BlockNumber = number

export type BlockHash = string

export type TransactionHash = string

export type Timestamp = string

export type Json = StringKeyMap | StringKeyMap[]

export enum ChainId {
    Ethereum = '1',
    Goerli = '5',
    Polygon = '137',
    Mumbai = '80001',
    Base = '8453',
}

export enum TransactionStatus {
    Failure = 0,
    Success = 1,
}

export interface TransactionFunctionArgument {
    name?: string
    type: string
    value: any
}

export interface Block {
    // Block hash.
    hash: BlockHash

    // Block number.
    number: BlockNumber

    // Block's parent's hash.
    parentHash: BlockHash | null

    // Hash of the generated proof-of-work.
    nonce: string

    // Sha3 of the uncles data in the block.
    sha3Uncles: string | null

    // Bloom filter for the logs of the block.
    logsBloom: string | null

    // Root of the transaction trie of the block.
    transactionsRoot: string | null

    // Root of the final state trie of the block.
    stateRoot: string | null

    // Root of the receipts trie of the block.
    receiptsRoot: string | null

    // Address of the beneficiary to whom the mining rewards were given.
    miner: string | null

    // Difficulty for this block.
    difficulty: string | null

    // Total difficulty of the chain until this block.
    totalDifficulty: string | null

    // Size of this block in bytes.
    size: number | null

    // Optional, arbitrary extra data included in the block.
    extraData: string | null

    // Maximum gas allowed in this block.
    gasLimit: string | null

    // Total used gas by all transactions in this block.
    gasUsed: string | null

    // The market price for gas.
    baseFeePerGas: string | null

    // Number of transactions included in this block.
    transactionCount: number

    // Timestamp of when this block was collated.
    timestamp: Timestamp
}

export interface Transaction {
    // Transaction hash.
    hash: TransactionHash

    // Number of transactions sent from address.
    nonce: number

    // The index of this transaction in this block.
    transactionIndex: number

    // Address this transaction was sent from.
    from: Address

    // Address this transaction was sent to.
    to: Address | null

    // The contract address created, if the transaction was a contract creation, otherwise null.
    contractAddress: Address | null

    // Value transferred in Wei.
    value: string | null

    // Data sent along with the transaction.
    input: string | null

    // Name of the contract function executed.
    functionName: string

    // Arguments provided to the contract function.
    functionArgs: TransactionFunctionArgument[]

    // EIP transaction type.
    transactionType: number | null

    // 1 (success) or 0 (failure).
    status: TransactionStatus | null

    // 32 bytes of post-transaction stateroot (pre Byzantium).
    root: string | null

    // Gas provided by the sender.
    gas: string | null

    // Gas price provided by the sender in Wei.
    gasPrice: string | null

    // Total fee that covers both base and priority fees.
    maxFeePerGas: string | null

    // Fee given to miners to incentivize them to include the transaction.
    maxPriorityFeePerGas: string | null

    // Amount of gas used by this specific transaction alone.
    gasUsed: string | null

    // Total amount of gas used when this transaction was executed in the block.
    cumulativeGasUsed: string | null

    // The actual value per gas deducted from the senders account.
    effectiveGasPrice: string | null

    // The hash of the block this transaction was included in.
    blockHash: BlockHash

    // The number of the block this transaction was included in.
    blockNumber: BlockNumber

    // Timestamp of when this transaction's block was collated.
    blockTimestamp: Timestamp
}
