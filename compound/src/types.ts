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
    supplyAPY: string
    borrowAPY: string
}

export interface CompoundMarketAPYDiff {
    cToken: string
    contractAddress: string
    supplyAPY?: string
    borrowAPY?: string
}
