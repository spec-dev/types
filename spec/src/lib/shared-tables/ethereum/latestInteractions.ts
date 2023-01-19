import { BlockHash, BlockNumber, Timestamp, Address } from '../../types'

/**
 * Represents the latest "interaction" between 2 ethereum addresses.
 */
export interface EthLatestInteraction {
    // Address this transaction or trace was sent from.
    from: Address

    // Address this transaction or trace was sent to.
    to: Address

    // Specifies whether the sender or recipient is a wallet or a contract.
    interactionType: EthLatestInteractionType

    // The transaction or trace hash.
    hash: string

    // Timestamp of when this interaction occurred (i.e. block timestamp).
    timestamp: Timestamp

    // The hash of the block this interaction occurred in.
    blockHash: BlockHash

    // The number of the block this interaction occurred in.
    blockNumber: BlockNumber
}

export enum EthLatestInteractionType {
    WalletToContract = 'wallet:contract',
    WalletToWallet = 'wallet:wallet',
    ContractToWallet = 'contract:wallet',
    ContractToContract = 'contract:contract',
}
