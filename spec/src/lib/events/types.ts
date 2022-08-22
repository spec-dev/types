export interface SpecEventOrigin {
    chainId: number
    blockNumber: number
    transactionHash?: string
    contractAddress: string
    eventTimestamp: number
}

export type SpecEvent<T> = {
    id: string
    nonce: number
    name: string
    origin: SpecEventOrigin
    data: T
}
