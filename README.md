# ERC20 Token Project

This project is an implementation of a standard ERC20 token utilizing the Ethereum blockchain. It includes a web interface for interacting with the smart contract allowing users to connect their Ethereum wallet, check their token balance, and transfer tokens to other addresses.

![Screenshot 2024-02-03 160325](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/998108be-d57d-4719-8615-f6b5cbe5e601)
![Screenshot 2024-02-03 160350](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/a286a14b-6623-4c61-ac0a-d624fb9d5ba3)
![Screenshot 2024-02-03 160410](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/00d675c9-e6bf-4b03-b6b2-262ba6de4138)
![Screenshot 2024-02-03 162251](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/da761b3d-1aed-43ca-bdf0-9f8976e951b1)
![Screenshot 2024-02-03 170006](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/2a31ad33-b3da-48bb-b1a6-3bb6ca060137)
![Screenshot 2024-02-03 170353](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/ac7c4dad-1aec-4c91-bb2f-6fa2ef56bc3d)
![Screenshot 2024-02-03 170411](https://github.com/Danishlynx/ERC20_Token_with_Front-end/assets/69537135/cb6a321f-56e1-4aac-84d1-2aad573cb4bb)


## Features

- **Connect Wallet**: Users can securely connect their Ethereum wallet to interact with the contract.
- **Get Balance**: Displays the user's current token balance within the connected wallet.
- **Send Tokens**: Allows the user to send tokens to another Ethereum address.

## Smart Contract

The smart contract is built using Solidity ^0.8.9 and is based on the OpenZeppelin ERC20 standard, ensuring security and compatibility.

### Deployment

The contract is deployed at the following address on the Ethereum network:

`0x48c1c7C0fa1B5c89B554EC229BB6d804614A28aB`



## Frontend

The frontend is a React application that uses `ethers.js` for blockchain interactions.

### Setup

To set up the project locally:

1. Clone the repository->Install dependencies with `npm install`.
1. npx hardhat compile
2. deploy it locally or on testnet
3. In app.js, place the deployed address
4. Run the application with `npm start`.

### Usage

To use the application:

1. Click on "Connect Wallet" to connect your MetaMask or any Ethereum wallet.
2. To view your token balance, click on "Get Balance".
3. To send tokens, enter the recipient's address and the amount, then click "Send Tokens".

## Technologies Used

- Solidity: For writing the smart contract.
- OpenZeppelin: For secure contract standards.
- React: For the frontend application.
- ethers.js: For Ethereum wallet integration and smart contract interaction.
- Web3: Ethereum's compatible JavaScript API which connects to the Ethereum network.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is open-source and available under the MIT License.
