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
    contractName: string
}

export type SpecCall = {
    name: string
    origin: SpecCallOrigin
    inputs: StringKeyMap
    inputArgs: any[]
    outputs: StringKeyMap
    outputArgs: any[]
}
