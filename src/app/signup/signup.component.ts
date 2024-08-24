import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  walletAddress: string = '';

  constructor(
    private blockchainService: BlockchainService,
    private router: Router
  ) {}

  async connectWallet() {
    this.walletAddress = await this.blockchainService.connectWallet();
  }

  onSubmit() {
    if (this.walletAddress) {
      this.router.navigate(['/game'], {
        state: {
          name: this.name,
          email: this.email,
          walletAddress: this.walletAddress,
        },
      });
    }
  }
}
