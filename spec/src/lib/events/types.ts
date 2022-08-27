export interface SpecEventOrigin {
    chainId: number
    blockNumber: number
    transactionHash?: string
    contractAddress?: string
    eventTimestamp: string // ISO string (e.g. "2022-08-28T02:31:37.000Z")
}

export type SpecEvent<T> = {
    id: string
    nonce: number
    name: string
    origin: SpecEventOrigin
    data: T
}
