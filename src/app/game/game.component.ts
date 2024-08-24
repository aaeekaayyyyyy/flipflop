import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  name: string = '';
  walletAddress: string = '';
  balance: string = '';
  betAmount: number = 0;
  selectedSide: string = '';
  result: string = '';

  constructor(
    private blockchainService: BlockchainService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.name = navigation.extras.state['name'];
      this.walletAddress = navigation.extras.state['walletAddress'];
    }
  }

  async ngOnInit() {
    this.balance = await this.blockchainService.getBalance(this.walletAddress);
  }

  selectSide(side: string) {
    this.selectedSide = side;
  }

  async flipCoin() {
    const win = await this.blockchainService.flipCoin(
      this.betAmount,
      this.walletAddress
    );
    this.result = win ? 'You Win!' : 'You Lose!';
    this.balance = await this.blockchainService.getBalance(this.walletAddress);
  }
}
