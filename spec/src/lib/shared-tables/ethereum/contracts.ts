import { BlockHash, BlockNumber, Timestamp, Address } from '../../types'

/**
 * An Ethereum Contract
 */
export interface EthContract {
    // The contract address.
    address: Address

    // The bytecode of the contract.
    bytecode: string | null

    // Whether this contract subscribes to the ERC-20 standard.
    isErc20: boolean | null

    // Whether this contract subscribes to the ERC-721 standard.
    isErc721: boolean | null

    // Whether this contract subscribes to the ERC-1155 standard.
    isErc1155: boolean | null

    // The hash of the block this transaction was included in.
    blockHash: BlockHash

    // The number of the block this transaction was included in.
    blockNumber: BlockNumber

    // Timestamp of the bloc in which this contract was created.
    blockTimestamp: Timestamp
}
