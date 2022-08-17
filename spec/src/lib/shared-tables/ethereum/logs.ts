/**
 * An Ethereum Log
 */
export interface EthLog {
    // The index of this log in the transaction receipt.
    logIndex: number

    // This log's transaction hash.
    transactionHash: string

    // The index of this log's transaction in this block.
    transactionIndex: number

    // Address from which this log originated.
    address: string | null

    // Log arguments.
    data: string | null

    // Data Topic at index 0.
    topic0: string | null

    // Data Topic at index 1.
    topic1: string | null

    // Data Topic at index 2.
    topic2: string | null

    // Data Topic at index 3.
    topic3: string | null

    // The hash of the block this transaction was included in.
    blockHash: string

    // The number of the block this transaction was included in.
    blockNumber: number

    // Timestamp (without timezone) of when this log's block was collated.
    blockTimestamp: Date
}
