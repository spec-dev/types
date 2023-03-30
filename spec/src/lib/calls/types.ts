import {
    StringKeyMap,
    Timestamp,
    BlockHash,
    BlockNumber,
    TransactionHash,
    Address,
    ChainId,
} from '../types'

export interface SpecCallOrigin {
    callTimestamp: Timestamp
    chainId: ChainId
    blockNumber: BlockNumber
    blockHash: BlockHash
    blockTimestamp: Timestamp
    transactionHash: TransactionHash
    contractAddress: Address
}

export type SpecCall = {
    id: string
    nonce: string
    name: string
    origin: SpecCallOrigin
    inputs: StringKeyMap
    inputArgs: any[]
    outputs: StringKeyMap
    outputArgs: any[]
}
