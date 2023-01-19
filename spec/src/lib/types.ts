export type StringKeyMap = { [key: string]: any }

export type Address = string

export type BlockNumber = number

export type BlockHash = string

export type TransactionHash = string

export type Timestamp = string

export type Json = StringKeyMap | StringKeyMap[]

export enum ChainId {
    Ethereum = '1',
    Polygon = '137',
    Mumbai = '80001',
}
