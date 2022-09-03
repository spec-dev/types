/**
 * Represents the latest "interaction" between 2 ethereum addresses.
 */
export interface EthLatestInteraction {
    // Address this transaction or trace was sent from.
    fromAddress: string

    // Address this transaction or trace was sent to.
    toAddress: string

    // Specifies whether the sender or recipient is a wallet or a contract.
    interactionType: EthLatestInteractionType

    // The transaction or trace hash.
    hash: string

    // Timestamp of when this interaction occurred (i.e. block timestamp).
    timestamp: string

    // The hash of the block this interaction occurred in.
    blockHash: string

    // The number of the block this interaction occurred in.
    blockNumber: number
}

export enum EthLatestInteractionType {
    WalletToContract = 'wallet:contract',
    WalletToWallet = 'wallet:wallet',
    ContractToWallet = 'contract:wallet',
    ContractToContract = 'contract:contract',
}
