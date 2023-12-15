import { ChainId } from '../types'
import { ChainNamespace, ChainSchema } from './types'

export function schemaForChainId(chainId: ChainId): ChainSchema | null {
    switch (chainId.toString()) {
        case ChainId.Ethereum:
            return ChainSchema.Ethereum
        case ChainId.Goerli:
            return ChainSchema.Goerli
        case ChainId.Polygon:
            return ChainSchema.Polygon
        case ChainId.Mumbai:
            return ChainSchema.Mumbai
        case ChainId.Base:
            return ChainSchema.Base
        case ChainId.Optimism:
            return ChainSchema.Optimism
        case ChainId.Arbitrum:
            return ChainSchema.Arbitrum
        case ChainId.ArbitrumSepolia:
            return ChainSchema.ArbitrumSepolia
        case ChainId.PGN:
            return ChainSchema.PGN
        case ChainId.Celo:
            return ChainSchema.Celo
        case ChainId.Linea:
            return ChainSchema.Linea
        case ChainId.Sepolia:
            return ChainSchema.Sepolia
        default:
            return null
    }
}

export function namespaceForChainId(chainId: ChainId): ChainNamespace | null {
    switch (chainId.toString()) {
        case ChainId.Ethereum:
            return ChainNamespace.Ethereum
        case ChainId.Goerli:
            return ChainNamespace.Goerli
        case ChainId.Polygon:
            return ChainNamespace.Polygon
        case ChainId.Mumbai:
            return ChainNamespace.Mumbai
        case ChainId.Base:
            return ChainNamespace.Base
        case ChainId.Optimism:
            return ChainNamespace.Optimism
        case ChainId.Arbitrum:
            return ChainNamespace.Arbitrum
        case ChainId.ArbitrumSepolia:
            return ChainNamespace.ArbitrumSepolia
        case ChainId.PGN:
            return ChainNamespace.PGN
        case ChainId.Celo:
            return ChainNamespace.Celo
        case ChainId.Linea:
            return ChainNamespace.Linea
        case ChainId.Sepolia:
            return ChainNamespace.Sepolia
        default:
            return null
    }
}
