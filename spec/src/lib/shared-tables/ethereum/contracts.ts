/**
 * An Ethereum Contract
 */
export interface EthContract {
    // The contract address.
    address: string

    // The bytecode of the contract.
    bytecode: string | null

    // Whether this contract subscribes to the ERC-20 standard.
    isERC20: boolean | null

    // Whether this contract subscribes to the ERC-721 standard.
    isERC721: boolean | null

    // Whether this contract subscribes to the ERC-1155 standard.
    isERC1155: boolean | null

    // The hash of the block this transaction was included in.
    blockHash: string

    // The number of the block this transaction was included in.
    blockNumber: number

    // Timestamp of the bloc in which this contract was created.
    blockTimestamp: string
}
