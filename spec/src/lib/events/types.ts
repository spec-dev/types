import {
    StringKeyMap,
    Timestamp,
    BlockHash,
    BlockNumber,
    TransactionHash,
    Address,
    ChainId,
    Transaction,
} from '../types'

export interface SpecEventOrigin {
    eventTimestamp: Timestamp
    chainId: ChainId
    blockNumber: BlockNumber
    blockHash: BlockHash
    blockTimestamp: Timestamp
    contractAddress?: Address
    transactionHash?: TransactionHash
    transactionIndex?: number
    transaction: Transaction
    logIndex?: number
    signature?: string
}

export type TypedSpecEvent<T> = {
    id: string
    nonce: string
    name: string
    origin: SpecEventOrigin
    data: T
}

export type SpecEvent = TypedSpecEvent<StringKeyMap>
export type SpecEventMulti = TypedSpecEvent<StringKeyMap[]>
