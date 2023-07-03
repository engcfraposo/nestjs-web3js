import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class Web3jsService {
  private readonly props: Required<Web3>;
  constructor(web3: Web3) {
    this.props = web3;
  }
  get web3(): Required<Web3> {
    return this.props;
  }
}
