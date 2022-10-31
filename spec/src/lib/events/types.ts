export interface SpecEventOrigin {
    chainId?: number
    transactionHash?: string
    contractAddress?: string
    blockNumber: number
    blockHash: string
    blockTimestamp: string
    eventTimestamp: string
}

export type SpecEvent<T> = {
    id: string
    nonce: string
    name: string
    origin: SpecEventOrigin
    data: T
}
