import { BlockHash, BlockNumber, Timestamp } from '../../types'

/**
 * An Ethereum Block
 */
export interface EthBlock {
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
