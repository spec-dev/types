import BN from 'bn.js'
import BigNumber from 'bignumber.js'
import {
    PromiEvent,
    TransactionReceipt,
    EventResponse,
    EventData,
    Web3ContractContext,
} from 'ethereum-abi-types-generator'
import ABI from './abi'

export namespace cETH {
    export const abi = ABI

    export interface CallOptions {
        from?: string
        gasPrice?: string
        gas?: number
    }

    export interface SendOptions {
        from: string
        value?: number | string | BN | BigNumber
        gasPrice?: string
        gas?: number
    }

    export interface EstimateGasOptions {
        from?: string
        value?: number | string | BN | BigNumber
        gas?: number
    }

    export interface MethodPayableReturnContext {
        send(options: SendOptions): PromiEvent<TransactionReceipt>
        send(
            options: SendOptions,
            callback: (error: Error, result: any) => void
        ): PromiEvent<TransactionReceipt>
        estimateGas(options: EstimateGasOptions): Promise<number>
        estimateGas(
            options: EstimateGasOptions,
            callback: (error: Error, result: any) => void
        ): Promise<number>
        encodeABI(): string
    }

    export interface MethodConstantReturnContext<TCallReturn> {
        call(): Promise<TCallReturn>
        call(options: CallOptions): Promise<TCallReturn>
        call(
            options: CallOptions,
            callback: (error: Error, result: TCallReturn) => void
        ): Promise<TCallReturn>
        encodeABI(): string
    }

    export interface MethodReturnContext extends MethodPayableReturnContext {}

    export type ContractContext = Web3ContractContext<
        CETH,
        CETHMethodNames,
        CETHEventsContext,
        CETHEvents
    >
    export type CETHEvents =
        | 'AccrueInterest'
        | 'Mint'
        | 'Redeem'
        | 'Borrow'
        | 'RepayBorrow'
        | 'LiquidateBorrow'
        | 'NewPendingAdmin'
        | 'NewAdmin'
        | 'NewComptroller'
        | 'NewMarketInterestRateModel'
        | 'NewReserveFactor'
        | 'ReservesReduced'
        | 'Failure'
        | 'Transfer'
        | 'Approval'
    export interface CETHEventsContext {
        AccrueInterest(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Mint(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Redeem(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Borrow(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        RepayBorrow(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        LiquidateBorrow(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        NewPendingAdmin(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        NewAdmin(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        NewComptroller(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        NewMarketInterestRateModel(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        NewReserveFactor(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        ReservesReduced(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Failure(
            parameters: {
                filter?: {}
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Transfer(
            parameters: {
                filter?: { from?: string | string[]; to?: string | string[] }
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
        Approval(
            parameters: {
                filter?: { owner?: string | string[]; spender?: string | string[] }
                fromBlock?: number
                toBlock?: 'latest' | number
                topics?: string[]
            },
            callback?: (error: Error, event: EventData) => void
        ): EventResponse
    }
    export type CETHMethodNames =
        | 'name'
        | 'approve'
        | 'mint'
        | 'reserveFactorMantissa'
        | 'borrowBalanceCurrent'
        | 'totalSupply'
        | 'exchangeRateStored'
        | 'transferFrom'
        | 'pendingAdmin'
        | 'exchangeRateCurrent'
        | 'balanceOfUnderlying'
        | 'getCash'
        | '_setComptroller'
        | 'totalBorrows'
        | 'repayBorrow'
        | 'comptroller'
        | '_reduceReserves'
        | 'initialExchangeRateMantissa'
        | 'accrualBlockNumber'
        | 'balanceOf'
        | 'totalBorrowsCurrent'
        | 'redeemUnderlying'
        | 'totalReserves'
        | 'symbol'
        | 'borrowBalanceStored'
        | 'accrueInterest'
        | 'transfer'
        | 'borrowIndex'
        | 'liquidateBorrow'
        | 'supplyRatePerBlock'
        | 'seize'
        | '_setPendingAdmin'
        | 'exchangeRateCurrent'
        | 'getAccountSnapshot'
        | 'borrow'
        | 'redeem'
        | 'allowance'
        | 'repayBorrowBehalf'
        | '_acceptAdmin'
        | '_setInterestRateModel'
        | 'interestRateModel'
        | 'admin'
        | 'borrowRatePerBlock'
        | '_setReserveFactor'
        | 'isCToken'
        | 'new'
    export interface GetAccountSnapshotResponse {
        result0: string
        result1: string
        result2: string
        result3: string
    }
    export interface AccrueInterest {
        interestAccumulated: string
        borrowIndex: string
        totalBorrows: string
    }
    export interface Mint {
        minter: string
        mintAmount: string
        mintTokens: string
    }
    export interface Redeem {
        redeemer: string
        redeemAmount: string
        redeemTokens: string
    }
    export interface Borrow {
        borrower: string
        borrowAmount: string
        accountBorrows: string
        totalBorrows: string
    }
    export interface RepayBorrow {
        payer: string
        borrower: string
        repayAmount: string
        accountBorrows: string
        totalBorrows: string
    }
    export interface LiquidateBorrow {
        liquidator: string
        borrower: string
        repayAmount: string
        cTokenCollateral: string
        seizeTokens: string
    }
    export interface NewPendingAdmin {
        oldPendingAdmin: string
        newPendingAdmin: string
    }
    export interface NewAdmin {
        oldAdmin: string
        newAdmin: string
    }
    export interface NewComptroller {
        oldComptroller: string
        newComptroller: string
    }
    export interface NewMarketInterestRateModel {
        oldInterestRateModel: string
        newInterestRateModel: string
    }
    export interface NewReserveFactor {
        oldReserveFactorMantissa: string
        newReserveFactorMantissa: string
    }
    export interface ReservesReduced {
        admin: string
        reduceAmount: string
        newTotalReserves: string
    }
    export interface Failure {
        error: string
        info: string
        detail: string
    }
    export interface Transfer {
        from: string
        to: string
        amount: string
    }
    export interface Approval {
        owner: string
        spender: string
        amount: string
    }
    export interface CETH {
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        name(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param spender Type: address, Indexed: false
         * @param amount Type: uint256, Indexed: false
         */
        approve(spender: string, amount: string): MethodReturnContext
        /**
         * Payable: true
         * Constant: false
         * StateMutability: payable
         * Type: function
         */
        mint(): MethodPayableReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        reserveFactorMantissa(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param account Type: address, Indexed: false
         */
        borrowBalanceCurrent(account: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        totalSupply(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        exchangeRateStored(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param src Type: address, Indexed: false
         * @param dst Type: address, Indexed: false
         * @param amount Type: uint256, Indexed: false
         */
        transferFrom(src: string, dst: string, amount: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        pendingAdmin(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        exchangeRateCurrent(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param owner Type: address, Indexed: false
         */
        balanceOfUnderlying(owner: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        getCash(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param newComptroller Type: address, Indexed: false
         */
        _setComptroller(newComptroller: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        totalBorrows(): MethodConstantReturnContext<string>
        /**
         * Payable: true
         * Constant: false
         * StateMutability: payable
         * Type: function
         */
        repayBorrow(): MethodPayableReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        comptroller(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param reduceAmount Type: uint256, Indexed: false
         */
        _reduceReserves(reduceAmount: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        initialExchangeRateMantissa(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        accrualBlockNumber(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         * @param owner Type: address, Indexed: false
         */
        balanceOf(owner: string): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         */
        totalBorrowsCurrent(): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param redeemAmount Type: uint256, Indexed: false
         */
        redeemUnderlying(redeemAmount: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        totalReserves(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        symbol(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         * @param account Type: address, Indexed: false
         */
        borrowBalanceStored(account: string): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         */
        accrueInterest(): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param dst Type: address, Indexed: false
         * @param amount Type: uint256, Indexed: false
         */
        transfer(dst: string, amount: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        borrowIndex(): MethodConstantReturnContext<string>
        /**
         * Payable: true
         * Constant: false
         * StateMutability: payable
         * Type: function
         * @param borrower Type: address, Indexed: false
         * @param cTokenCollateral Type: address, Indexed: false
         */
        liquidateBorrow(borrower: string, cTokenCollateral: string): MethodPayableReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        supplyRatePerBlock(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param liquidator Type: address, Indexed: false
         * @param borrower Type: address, Indexed: false
         * @param seizeTokens Type: uint256, Indexed: false
         */
        seize(liquidator: string, borrower: string, seizeTokens: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param newPendingAdmin Type: address, Indexed: false
         */
        _setPendingAdmin(newPendingAdmin: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         */
        exchangeRateCurrent(): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         * @param account Type: address, Indexed: false
         */
        getAccountSnapshot(account: string): MethodConstantReturnContext<GetAccountSnapshotResponse>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param borrowAmount Type: uint256, Indexed: false
         */
        borrow(borrowAmount: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param redeemTokens Type: uint256, Indexed: false
         */
        redeem(redeemTokens: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         * @param owner Type: address, Indexed: false
         * @param spender Type: address, Indexed: false
         */
        allowance(owner: string, spender: string): MethodConstantReturnContext<string>
        /**
         * Payable: true
         * Constant: false
         * StateMutability: payable
         * Type: function
         * @param borrower Type: address, Indexed: false
         */
        repayBorrowBehalf(borrower: string): MethodPayableReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         */
        _acceptAdmin(): MethodReturnContext
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param newInterestRateModel Type: address, Indexed: false
         */
        _setInterestRateModel(newInterestRateModel: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        interestRateModel(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        admin(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        borrowRatePerBlock(): MethodConstantReturnContext<string>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: function
         * @param newReserveFactorMantissa Type: uint256, Indexed: false
         */
        _setReserveFactor(newReserveFactorMantissa: string): MethodReturnContext
        /**
         * Payable: false
         * Constant: true
         * StateMutability: view
         * Type: function
         */
        isCToken(): MethodConstantReturnContext<boolean>
        /**
         * Payable: false
         * Constant: false
         * StateMutability: nonpayable
         * Type: constructor
         * @param comptroller_ Type: address, Indexed: false
         * @param interestRateModel_ Type: address, Indexed: false
         * @param initialExchangeRateMantissa_ Type: uint256, Indexed: false
         * @param name_ Type: string, Indexed: false
         * @param symbol_ Type: string, Indexed: false
         * @param exchangeRateCurrent_ Type: uint256, Indexed: false
         */
        'new'(
            comptroller_: string,
            interestRateModel_: string,
            initialExchangeRateMantissa_: string,
            name_: string,
            symbol_: string,
            exchangeRateCurrent_: string
        ): MethodReturnContext
    }
}
