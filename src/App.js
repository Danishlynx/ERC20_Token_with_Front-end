import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Token from './artifacts/contracts/NDToken.sol/NDToken.json';

const tokenAddress = "0x48c1c7C0fa1B5c89B554EC229BB6d804614A28aB";

function App() {
  const [userAccount, setUserAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState('');
  const [transactionLog, setTransactionLog] = useState(''); // State for transaction log

  async function requestAccount() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const [account] = await window.ethereum.request({ method: 'eth_accounts' });
      setUserAccount(account);
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  }

  async function getBalance() {
    if (!userAccount) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
    const balance = await contract.balanceOf(userAccount);
    setBalance(ethers.utils.formatEther(balance));
  }

  async function sendCoins() {
    if (!userAccount || !amount) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
    const transaction = await contract.transfer(userAccount, ethers.utils.parseEther(amount));
    await transaction.wait();
    getBalance();
    // Update transaction log
    setTransactionLog(`Transaction completed: ${signer.getAddress()} sent ${amount} Tokens to ${userAccount}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        {userAccount ? <p>Connected Account: {userAccount}</p> : (
          <button className="button button-secondary" onClick={requestAccount}>
            Connect Wallet
          </button>
        )}
        <br />
        <button className="button button-primary" onClick={getBalance}>Get Balance</button>
        {balance && <div>Balance: {balance} Tokens</div>}
        <input className="input" value={userAccount} onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
        <input className="input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        <button className="button button-primary" onClick={sendCoins}>Send Tokens</button>
        {transactionLog && <div className="transaction-log">{transactionLog}</div>}
      </header>
    </div>
  );
}

export default App;
