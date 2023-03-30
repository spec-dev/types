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
        default:
            return null
    }
}
