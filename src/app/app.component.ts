import { Component } from '@angular/core';
import { BigNumber } from 'ethers';
import { publishTransactionFlow } from 'nephw-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nephw-demo';

  txFlowCid: string = ""

  publish() {
    publishTransactionFlow([
      {
        chainId: 80001,
        tx: {
          to: "0x0",
          value: BigNumber.from(12)
        }
      }
    ]).then(res => { this.txFlowCid = res })
  }
}
