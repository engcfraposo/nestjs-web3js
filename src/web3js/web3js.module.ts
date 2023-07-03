import { DynamicModule, Global, Module } from '@nestjs/common';
import { Web3jsService } from './web3js.service';
import Web3 from 'web3';
import { CreateWeb3jsServiceDto } from './dto/create-web3js-service.dto';

@Global()
@Module({
  providers: [Web3jsService],
  exports: [Web3jsService],
})
export class Web3jsModule {
  static forRoot({ infuraUrl }: CreateWeb3jsServiceDto): DynamicModule {
    return {
      module: Web3jsModule,
      providers: [
        {
          provide: Web3jsService,
          useFactory: () => new Web3jsService(new Web3(infuraUrl)),
        },
      ],
    };
  }
}
