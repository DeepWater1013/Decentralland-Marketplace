import BN from 'bn.js'
import { Address } from 'web3x-es/address'
import { TransactionReceipt } from 'web3x-es/formatters'
import { Contract, ContractOptions, TxCall, TxSend } from 'web3x-es/contract'
import { Eth } from 'web3x-es/eth'
import abi from './UniswapV2ConverterAbi'
interface UniswapV2ConverterEvents {}
interface UniswapV2ConverterEventLogs {}
interface UniswapV2ConverterTxEventLogs {}
export interface UniswapV2ConverterTransactionReceipt
    extends TransactionReceipt<UniswapV2ConverterTxEventLogs> {}
interface UniswapV2ConverterMethods {
    calcEtherToToken(
        _dstToken: Address,
        _etherAmount: number | string | BN
    ): TxCall<string>
    getTrader(): TxCall<Address>
    swapEtherToToken(
        _dstToken: Address
    ): TxSend<UniswapV2ConverterTransactionReceipt>
    swapTokenToEther(
        _srcToken: Address,
        _srcAmount: number | string | BN
    ): TxSend<UniswapV2ConverterTransactionReceipt>
}
export interface UniswapV2ConverterDefinition {
    methods: UniswapV2ConverterMethods
    events: UniswapV2ConverterEvents
    eventLogs: UniswapV2ConverterEventLogs
}
export class UniswapV2Converter extends Contract<UniswapV2ConverterDefinition> {
    constructor(eth: Eth, address?: Address, options?: ContractOptions) {
        super(eth, abi, address, options)
    }
    deploy(
        _uniswapV2Router: Address
    ): TxSend<UniswapV2ConverterTransactionReceipt> {
        return super.deployBytecode(
            '0x60a060405234801561001057600080fd5b506040516113633803806113638339818101604052602081101561003357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505060805160601c6112a76100bc6000398061020552806102e152806103cb52806105c45280610638528061076a52806109ef5280610ad952506112a76000f3fe60806040526004361061003f5760003560e01c806326680ef8146100445780637df49300146100b3578063a683beb81461010a578063da70654e14610162575b600080fd5b34801561005057600080fd5b5061009d6004803603604081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101d1565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c86105c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61014c6004803603602081101561012057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105e8565b6040518082815260200191505060405180910390f35b34801561016e57600080fd5b506101bb6004803603604081101561018557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610957565b6040518082815260200191505060405180910390f35b60006102003330848673ffffffffffffffffffffffffffffffffffffffff16610c87909392919063ffffffff16565b61024b7f0000000000000000000000000000000000000000000000000000000000000000838573ffffffffffffffffffffffffffffffffffffffff16610d749092919063ffffffff16565b6060600267ffffffffffffffff8111801561026557600080fd5b506040519080825280602002602001820160405280156102945781602001602082028036833780820191505090505b50905083816000815181106102a557fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d602081101561036f57600080fd5b81019080805190602001909291905050508160018151811061038d57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318cbafe58560008533426040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156104a1578082015181840152602081019050610486565b505050509050019650505050505050600060405180830381600087803b1580156104ca57600080fd5b505af11580156104de573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561050857600080fd5b810190808051604051939291908464010000000082111561052857600080fd5b8382019150602082018581111561053e57600080fd5b825186602082028301116401000000008211171561055b57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610592578082015181840152602081019050610577565b505050509050016040525050509050806001815181106105ae57fe5b60200260200101519250505092915050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60006060600267ffffffffffffffff8111801561060457600080fd5b506040519080825280602002602001820160405280156106335781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b15801561069c57600080fd5b505afa1580156106b0573d6000803e3d6000fd5b505050506040513d60208110156106c657600080fd5b8101908080519060200190929190505050816000815181106106e457fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050828160018151811061072c57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637ff36ab53460008533426040518663ffffffff1660e01b815260040180858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561083a57808201518184015260208101905061081f565b50505050905001955050505050506000604051808303818588803b15801561086157600080fd5b505af1158015610875573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f8201168201806040525060208110156108a057600080fd5b81019080805160405193929190846401000000008211156108c057600080fd5b838201915060208201858111156108d657600080fd5b82518660208202830111640100000000821117156108f357600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561092a57808201518184015260208101905061090f565b5050505090500160405250505090508060018151811061094657fe5b602002602001015192505050919050565b60006060600267ffffffffffffffff8111801561097357600080fd5b506040519080825280602002602001820160405280156109a25781602001602082028036833780820191505090505b50905083816000815181106109b357fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5357600080fd5b505afa158015610a67573d6000803e3d6000fd5b505050506040513d6020811015610a7d57600080fd5b810190808051906020019092919050505081600181518110610a9b57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631f00ca7485846040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610b6d578082015181840152602081019050610b52565b50505050905001935050505060006040518083038186803b158015610b9157600080fd5b505afa158015610ba5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610bcf57600080fd5b8101908080516040519392919084640100000000821115610bef57600080fd5b83820191506020820185811115610c0557600080fd5b8251866020820283011164010000000082111715610c2257600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610c59578082015181840152602081019050610c3e565b50505050905001604052505050905080600081518110610c7557fe5b60200260200101519250505092915050565b610d6e846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f7b565b50505050565b6000811480610e6e575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610e3157600080fd5b505afa158015610e45573d6000803e3d6000fd5b505050506040513d6020811015610e5b57600080fd5b8101908080519060200190929190505050145b610ec3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061123c6036913960400191505060405180910390fd5b610f768363095ea7b360e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f7b565b505050565b610f9a8273ffffffffffffffffffffffffffffffffffffffff166111c6565b61100c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b6020831061105b5780518252602082019150602081019050602083039250611038565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146110bd576040519150601f19603f3d011682016040523d82523d6000602084013e6110c2565b606091505b50915091508161113a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b6000815111156111c05780806020019051602081101561115957600080fd5b81019080805190602001909291905050506111bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611212602a913960400191505060405180910390fd5b5b50505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561120857506000801b8214155b9250505091905056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a264697066735822122033e960b23f07f52608407552fac049ccb03da48a729d8bca91581cd93b8d46de64736f6c63430006080033',
            _uniswapV2Router
        ) as any
    }
}
export var UniswapV2ConverterAbi = abi
