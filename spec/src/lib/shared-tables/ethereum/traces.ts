/**
 * An Ethereum Trace
 */
export interface EthTrace {
    // Primary key with the following calculated value:
    // * For transaction-scoped traces --> {trace_type}_{transaction_hash}_{trace_address}
    // * For block-scoped traces --> {trace_type}_{block_hash}_{index_within_block}
    id: string

    // This trace's transaction hash.
    transactionHash: string | null

    // The index of this trace's transaction in this block.
    transactionIndex: number | null

    // Address of the sender, null when trace_type is genesis or reward.
    from: string | null

    // Address of the receiver if trace_type is call, address of new contract
    // or null if trace_type is create, beneficiary address if trace_type is suicide,
    // miner address if trace_type is reward, shareholder address if trace_type is genesis,
    // WithdrawDAO address if trace_type is daofork.
    to: string | null

    // Value transferred in Wei.
    value: string | null

    // The data sent along with the message call.
    input: string | null

    // The output of the message call, bytecode of contract when trace_type is create.
    output: string | null

    // One of call, create, suicide, reward, genesis, daofork.
    traceType: EthTraceType

    // One of call, callcode, delegatecall, staticcall.
    callType: EthCallType | null

    // One of block, uncle.
    rewardType: EthRewardType | null

    // The number of subtraces.
    subtraces: number | null

    // Comma separated list of trace address in call tree.
    traceAddress: string | null

    // Index of trace in block (only works if traces were originally ordered correctly which is the case for Parity traces).
    traceIndex: number

    // Error if message call failed. This field doesn't contain top-level trace errors.
    error: string | null

    // 1 (success) or 0 (failure).
    status: EthTraceStatus | null

    // Gas provided with the message call.
    gas: string | null

    // Gas used by the message call.
    gasUsed: string | null

    // The hash of the block this trace was included in.
    blockHash: string

    // The number of the block this trace was included in.
    blockNumber: number

    // Timestamp of when this trace's block was collated.
    blockTimestamp: string
}

export enum EthTraceType {
    Call = 'call',
    Create = 'create',
    Suicide = 'suicide',
    Reward = 'reward',
    Genesis = 'genesis',
    DAOFork = 'daofork',
}

export enum EthCallType {
    Call = 'call',
    Callcode = 'callcode',
    Delegatecall = 'delegatecall',
    Staticcall = 'staticcall',
}

export enum EthRewardType {
    Block = 'block',
    Uncle = 'uncle',
}

export enum EthTraceStatus {
    Failure = 0,
    Success = 1,
}
