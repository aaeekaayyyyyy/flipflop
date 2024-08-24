import { Injectable } from '@angular/core';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  web3: Web3;
  provider: any;

  constructor() {
    this.web3 = new Web3();
  }

  async connectWallet(): Promise<string> {
    this.provider = await detectEthereumProvider();
    if (this.provider) {
      this.web3.setProvider(this.provider);
      const accounts = await this.web3.eth.requestAccounts();
      return accounts[0];
    } else {
      alert('Please install MetaMask!');
      return '';
    }
  }

  async getBalance(address: string): Promise<string> {
    const balance = await this.web3.eth.getBalance(address);
    return this.web3.utils.fromWei(balance, 'ether'); // Convert BigNumber to string
  }

  async flipCoin(amount: number, address: string): Promise<boolean> {
    const win = Math.random() >= 0.5;
    if (win) {
      await this.web3.eth.sendTransaction({
        from: this.provider.selectedAddress,
        to: address,
        value: this.web3.utils.toWei((amount * 2).toString(), 'ether'),
      });
    }
    return win;
  }
}
