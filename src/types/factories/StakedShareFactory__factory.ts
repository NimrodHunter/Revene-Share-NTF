/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakedShareFactory,
  StakedShareFactoryInterface,
} from "../StakedShareFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cryptobarter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feeOracle_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clone",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "projectToken",
        type: "address",
      },
    ],
    name: "Cloned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "numberOfProjects",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "projectAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "projectToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "logo",
        type: "string",
      },
    ],
    name: "stakedShare",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610cbd380380610cbd83398101604081905261002f916101af565b61003833610143565b600180556001600160a01b0382166100a35760405162461bcd60e51b8152602060048201526024808201527f63727970746f62617274657220616464726573732073686f756c64206e6f74206044820152630626520360e41b60648201526084015b60405180910390fd5b6001600160a01b0381166101035760405162461bcd60e51b815260206004820152602160248201527f6665654f7261636c6520616464726573732073686f756c64206e6f74206265206044820152600360fc1b606482015260840161009a565b60028054600160201b600160c01b0319166401000000006001600160a01b0394851602179055600380546001600160a01b031916919092161790556101e2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146101aa57600080fd5b919050565b600080604083850312156101c257600080fd5b6101cb83610193565b91506101d960208401610193565b90509250929050565b610acc806101f16000396000f3fe6080604052600436106100695760003560e01c8063d2b121f111610043578063d2b121f1146101a9578063db5e4c7f146101bc578063f2fde38b146101e1576100ca565b80631d3e78af14610121578063715018a6146101745780638da5cb5b1461018b576100ca565b366100ca5760405162461bcd60e51b815260206004820152602660248201527f6469726563746c7920657468207472616e736665727320617265206e6f7420616044820152651b1b1bddd95960d21b60648201526084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602660248201527f6469726563746c7920657468207472616e736665727320617265206e6f7420616044820152651b1b1bddd95960d21b60648201526084016100c1565b34801561012d57600080fd5b5061015761013c366004610831565b6000908152600460205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561018057600080fd5b50610189610201565b005b34801561019757600080fd5b506000546001600160a01b0316610157565b6101896101b7366004610904565b610267565b3480156101c857600080fd5b5060025460405163ffffffff909116815260200161016b565b3480156101ed57600080fd5b506101896101fc3660046109ae565b6105d0565b6000546001600160a01b0316331461025b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100c1565b61026560006106b2565b565b600260015414156102ba5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016100c1565b60026001556000546001600160a01b031633146103195760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100c1565b6001600160a01b0385161580159061033957506001600160a01b03841615155b6103855760405162461bcd60e51b815260206004820152601760248201527f73686f756c64206e6f742062652061646472657373203000000000000000000060448201526064016100c1565b600360009054906101000a90046001600160a01b03166001600160a01b031663b0ee793f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103d357600080fd5b505afa1580156103e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040b91906109d0565b34101561045a5760405162461bcd60e51b815260206004820152600b60248201527f696e76616c69642066656500000000000000000000000000000000000000000060448201526064016100c1565b6104633461070f565b6104af5760405162461bcd60e51b815260206004820152601260248201527f7472616e7366657220666565206661696c73000000000000000000000000000060448201526064016100c1565b60006104ba86610776565b604051635f1e6f6d60e01b81529091506001600160a01b03821690635f1e6f6d906104ef908890889088908890600401610a36565b600060405180830381600087803b15801561050957600080fd5b505af115801561051d573d6000803e3d6000fd5b5050600280546001935090915060009061053e90849063ffffffff16610a89565b82546101009290920a63ffffffff81810219909316918316021790915560025416600090815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038681169182179092559151908916935090917fae93c8e84b9065113a0230417359f283712a933bdab9abc10fcb1179edc6b1c891a350506001805550505050565b6000546001600160a01b0316331461062a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100c1565b6001600160a01b0381166106a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016100c1565b6106af816106b2565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60025460405160009182916401000000009091046001600160a01b03169084908381818185875af1925050503d8060008114610767576040519150601f19603f3d011682016040523d82523d6000602084013e61076c565b606091505b5090949350505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b03811661082c5760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c65640000000000000000000060448201526064016100c1565b919050565b60006020828403121561084357600080fd5b5035919050565b80356001600160a01b038116811461082c57600080fd5b634e487b7160e01b600052604160045260246000fd5b600082601f83011261088857600080fd5b813567ffffffffffffffff808211156108a3576108a3610861565b604051601f8301601f19908116603f011681019082821181831017156108cb576108cb610861565b816040528381528660208588010111156108e457600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561091c57600080fd5b6109258661084a565b94506109336020870161084a565b9350604086013567ffffffffffffffff8082111561095057600080fd5b61095c89838a01610877565b9450606088013591508082111561097257600080fd5b61097e89838a01610877565b9350608088013591508082111561099457600080fd5b506109a188828901610877565b9150509295509295909350565b6000602082840312156109c057600080fd5b6109c98261084a565b9392505050565b6000602082840312156109e257600080fd5b5051919050565b6000815180845260005b81811015610a0f576020818501810151868301820152016109f3565b81811115610a21576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0385168152608060208201526000610a5860808301866109e9565b8281036040840152610a6a81866109e9565b90508281036060840152610a7e81856109e9565b979650505050505050565b600063ffffffff808316818516808303821115610ab657634e487b7160e01b600052601160045260246000fd5b0194935050505056fea164736f6c6343000809000a";

type StakedShareFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakedShareFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakedShareFactory__factory extends ContractFactory {
  constructor(...args: StakedShareFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StakedShareFactory";
  }

  deploy(
    cryptobarter_: string,
    feeOracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakedShareFactory> {
    return super.deploy(
      cryptobarter_,
      feeOracle_,
      overrides || {}
    ) as Promise<StakedShareFactory>;
  }
  getDeployTransaction(
    cryptobarter_: string,
    feeOracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      cryptobarter_,
      feeOracle_,
      overrides || {}
    );
  }
  attach(address: string): StakedShareFactory {
    return super.attach(address) as StakedShareFactory;
  }
  connect(signer: Signer): StakedShareFactory__factory {
    return super.connect(signer) as StakedShareFactory__factory;
  }
  static readonly contractName: "StakedShareFactory";
  public readonly contractName: "StakedShareFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakedShareFactoryInterface {
    return new utils.Interface(_abi) as StakedShareFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakedShareFactory {
    return new Contract(address, _abi, signerOrProvider) as StakedShareFactory;
  }
}
