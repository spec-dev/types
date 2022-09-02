/**
 * An Ethereum Transaction
 */
export interface EthTransaction {
    // Transaction hash.
    hash: string

    // Number of transactions sent from address.
    nonce: number

    // The index of this transaction in this block.
    transactionIndex: number

    // Address this transaction was sent from.
    from: string

    // Address this transaction was sent to.
    to: string | null

    // The contract address created, if the transaction was a contract creation, otherwise null.
    contractAddress: string | null

    // Value transferred in Wei.
    value: string | null

    // Data sent along with the transaction.
    input: string | null

    // EIP transaction type.
    transactionType: number | null

    // 1 (success) or 0 (failure).
    status: EthTransactionStatus | null

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
    blockHash: string

    // The number of the block this transaction was included in.
    blockNumber: number

    // Timestamp of when this transaction's block was collated.
    blockTimestamp: string
}

export enum EthTransactionStatus {
    Failure = 0,
    Success = 1,
}
