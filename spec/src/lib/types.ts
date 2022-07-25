export interface SpecEventOrigin {
    chainId: number
    blockNumber: number
    transactionHash?: string
    contractAddress: string
    eventTimestamp: number
}

export type SpecEvent<T> = {
    name: string
    origin: SpecEventOrigin
    object: T
}
