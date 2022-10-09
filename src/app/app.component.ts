import { Component } from '@angular/core';
import { BigNumber, ethers } from 'ethers';
import { publishTransactionFlow } from 'nephw-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nephw-demo';

  txFlowCid: string = ""

  async publish() {

    const erc20abi = [
      "function transfer(address receiver, uint256 amount) external"
    ];

    const polygonProvider = new ethers.providers.JsonRpcProvider('https://')
    const optimismProvider = new ethers.providers.JsonRpcProvider('https://')

    const ERC20ContractPolygon = new ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", erc20abi, polygonProvider);
      
    const polygonTx = await ERC20ContractPolygon.populateTransaction.transfer(
      "0xad9b3d26467594bac292b428d0b1b0a5ab81540c",
      100005
    );

    publishTransactionFlow([
      {
        chainId: 80001,
        tx: {
          to: "0xA5C80DF3E06775ac174c41206DBec852e453958D",
          value: BigNumber.from(0)
        }
      },
      {
        chainId: 80001,
        tx: {
          to: "0xA5C80DF3E06775ac174c41206DBec852e453958D",
          value: BigNumber.from(0)
        }
      },
      {
        chainId: 80001,
        tx: {
          to: "0xA5C80DF3E06775ac174c41206DBec852e453958D",
          value: BigNumber.from(0)
        }
      }
    ]).then(res => { this.txFlowCid = res })
  }
}
