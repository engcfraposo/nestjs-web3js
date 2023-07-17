import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import Web3 from 'web3';
import { CreateWeb3jsServiceDto } from './dto/create-web3js-service.dto';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({})
export class Web3jsModule {
  static forRoot({ infuraUrl }: CreateWeb3jsServiceDto): DynamicModule {
    const web3Provider: Provider = {
      provide: 'WEB_3',
      useValue: new Web3(infuraUrl),
    };
    return {
      module: Web3jsModule,
      providers: [web3Provider],
      exports: [web3Provider],
    };
  }

  static forRootAsync(options: {
    imports?: any[];
    useFactory: (
      configService: ConfigService,
    ) => Promise<CreateWeb3jsServiceDto> | CreateWeb3jsServiceDto;
    inject?: any[];
  }): DynamicModule {
    const web3Provider: Provider = {
      provide: 'WEB_3',
      useFactory: async (configService: ConfigService) => {
        const dto = await options.useFactory(configService);
        return new Web3(dto.infuraUrl);
      },
      inject: options.inject || [],
    };

    return {
      module: Web3jsModule,
      imports: options.imports || [],
      providers: [web3Provider],
      exports: [web3Provider],
    };
  }
}
