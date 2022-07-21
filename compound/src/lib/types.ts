import { SpecEvent } from '@spec.types/spec'
import { cToken } from './cToken/types'

export enum CTokenName {
    cAAVE = 'cAAVE',
    cBAT = 'cBAT',
    cCOMP = 'cCOMP',
    cDAI = 'cDAI',
    cETH = 'cETH',
    cFEI = 'cFEI',
    cLINK = 'cLINK',
    cMKR = 'cMKR',
    cREP = 'cREP',
    cSAI = 'cSAI',
    cSUSHI = 'cSUSHI',
    cTUSD = 'cTUSD',
    cUNI = 'cUNI',
    cUSDC = 'cUSDC',
    cUSDP = 'cUSDP',
    cUSDT = 'cUSDT',
    cWBTC = 'cWBTC',
    cWBTC2 = 'cWBTC2',
    cYFI = 'cYFI',
    cZRX = 'cZRX',
}

export interface CompoundMarketAPY {
    cToken: string
    contractAddress: string
    supplyAPY: number
    borrowAPY: number
}

export interface CompoundMarketAPYDiff {
    cToken: string
    contractAddress: string
    supplyAPY?: number
    borrowAPY?: number
}

export namespace events {
    export type AccrueInterest = SpecEvent<cToken.AccrueInterest>
    export type Mint = SpecEvent<cToken.Mint>
    export type Redeem = SpecEvent<cToken.Redeem>
    export type Borrow = SpecEvent<cToken.Borrow>
    export type RepayBorrow = SpecEvent<cToken.RepayBorrow>
    export type LiquidateBorrow = SpecEvent<cToken.LiquidateBorrow>
    export type NewPendingAdmin = SpecEvent<cToken.NewPendingAdmin>
    export type NewAdmin = SpecEvent<cToken.NewAdmin>
    export type NewComptroller = SpecEvent<cToken.NewComptroller>
    export type NewMarketInterestRateModel = SpecEvent<cToken.NewMarketInterestRateModel>
    export type NewReserveFactor = SpecEvent<cToken.NewReserveFactor>
    export type ReservesReduced = SpecEvent<cToken.ReservesReduced>
    export type Failure = SpecEvent<cToken.Failure>
    export type Transfer = SpecEvent<cToken.Transfer>
    export type Approval = SpecEvent<cToken.Approval>
    export type CompoundMarketAPYUpdated = SpecEvent<CompoundMarketAPYDiff>
}
