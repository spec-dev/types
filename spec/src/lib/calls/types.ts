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

export interface SpecCallOrigin {
    eventTimestamp: Timestamp
    chainId: ChainId
    blockNumber: BlockNumber
    blockHash: BlockHash
    blockTimestamp: Timestamp
    transactionHash: TransactionHash
    transaction: Transaction
    contractAddress: Address
    contractName: string
    signature: string
}

export type SpecCall = {
    id: string
    name: string
    origin: SpecCallOrigin
    inputs: StringKeyMap
    inputArgs: any[]
    outputs: StringKeyMap
    outputArgs: any[]
}
