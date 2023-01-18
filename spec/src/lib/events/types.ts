import {
    StringKeyMap,
    Timestamp,
    BlockHash,
    BlockNumber,
    TransactionHash,
    Address,
    ChainId,
} from '../types'

export interface SpecEventOrigin {
    eventTimestamp: Timestamp
    chainId: ChainId
    blockNumber: BlockNumber
    blockHash: BlockHash
    blockTimestamp: Timestamp
    transactionHash?: TransactionHash
    contractAddress?: Address
}

export type TypedSpecEvent<T> = {
    id: string
    nonce: string
    name: string
    origin: SpecEventOrigin
    data: T
}

export type SpecEvent = {
    id: string
    nonce: string
    name: string
    origin: SpecEventOrigin
    data: StringKeyMap | StringKeyMap[]
}
