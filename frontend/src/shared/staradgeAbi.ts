export const staradgeAbi = [
    {
        "members": [
            {
                "name": "low",
                "offset": 0,
                "type": "felt"
            },
            {
                "name": "high",
                "offset": 1,
                "type": "felt"
            }
        ],
        "name": "Uint256",
        "size": 2,
        "type": "struct"
    },
    {
        "members": [
            {
                "name": "word_1",
                "offset": 0,
                "type": "felt"
            },
            {
                "name": "word_2",
                "offset": 1,
                "type": "felt"
            },
            {
                "name": "word_3",
                "offset": 2,
                "type": "felt"
            },
            {
                "name": "word_4",
                "offset": 3,
                "type": "felt"
            }
        ],
        "name": "StorageSlot",
        "size": 4,
        "type": "struct"
    },
    {
        "data": [
            {
                "name": "from_",
                "type": "felt"
            },
            {
                "name": "to",
                "type": "felt"
            },
            {
                "name": "tokenId",
                "type": "Uint256"
            }
        ],
        "keys": [],
        "name": "Transfer",
        "type": "event"
    },
    {
        "data": [
            {
                "name": "owner",
                "type": "felt"
            },
            {
                "name": "approved",
                "type": "felt"
            },
            {
                "name": "tokenId",
                "type": "Uint256"
            }
        ],
        "keys": [],
        "name": "Approval",
        "type": "event"
    },
    {
        "data": [
            {
                "name": "owner",
                "type": "felt"
            },
            {
                "name": "operator",
                "type": "felt"
            },
            {
                "name": "approved",
                "type": "felt"
            }
        ],
        "keys": [],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "data": [
            {
                "name": "previousOwner",
                "type": "felt"
            },
            {
                "name": "newOwner",
                "type": "felt"
            }
        ],
        "keys": [],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "constructor",
        "outputs": [],
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "name": "owner",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "interface_id",
                "type": "felt"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "name",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "symbol",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "owner",
                "type": "felt"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "Uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "token_id",
                "type": "Uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "name": "owner",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "token_id",
                "type": "Uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "name": "token_uri_len",
                "type": "felt"
            },
            {
                "name": "token_uri",
                "type": "felt*"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "base_token_uri_len",
                "type": "felt"
            },
            {
                "name": "base_token_uri",
                "type": "felt*"
            },
            {
                "name": "token_uri_suffix",
                "type": "felt"
            }
        ],
        "name": "setTokenURI",
        "outputs": [],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "message",
                "type": "felt"
            },
            {
                "name": "public_key",
                "type": "felt"
            },
            {
                "name": "signature_r",
                "type": "felt"
            },
            {
                "name": "signature_s",
                "type": "felt"
            }
        ],
        "name": "linkL1wallet",
        "outputs": [],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "token_id",
                "type": "felt"
            },
            {
                "name": "block_num",
                "type": "felt"
            },
            {
                "name": "account_addr",
                "type": "felt"
            },
            {
                "name": "slot",
                "type": "StorageSlot"
            },
            {
                "name": "proof_sizes_bytes_len",
                "type": "felt"
            },
            {
                "name": "proof_sizes_bytes",
                "type": "felt*"
            },
            {
                "name": "proof_sizes_words_len",
                "type": "felt"
            },
            {
                "name": "proof_sizes_words",
                "type": "felt*"
            },
            {
                "name": "proofs_concat_len",
                "type": "felt"
            },
            {
                "name": "proofs_concat",
                "type": "felt*"
            }
        ],
        "name": "mint",
        "outputs": [],
        "type": "function"
    }
]
