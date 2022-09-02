/**
 * An Ethereum Contract
 */
export interface EthContract {
    // Contract address.
    address: string

    // The bytecode of the contract.
    bytecode: string | null

    // The hash of the block this transaction was included in.
    blockHash: string

    // The number of the block this transaction was included in.
    blockNumber: number

    // Timestamp of when this contract's block was collated.
    blockTimestamp: string
}
