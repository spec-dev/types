export interface SpecEventOrigin {
    chainId: number
    blockNumber: number
    blockHash: string
    blockTimestamp: number
    transactionHash?: string
    contractAddress: string
    broadcastTimestamp: number
}

export type SpecEvent<T> = {
    name: string
    origin: SpecEventOrigin
    object: T
}
