import { namespaceForChainId } from '../shared-tables/helpers'
import { ChainId } from '../types'

export const CONTRACTS_NSP = 'contracts'

export function contractEventNamespaceForChainId(chainId: ChainId): string | null {
    const chainNsp = namespaceForChainId(chainId)
    return chainNsp ? [chainNsp, CONTRACTS_NSP].join('.') : null
}
