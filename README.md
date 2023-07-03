# Web3jsModule - Interacting with Ethereum Blockchain

![Build](https://github.com/engcfraposo/nestjs-web3js/actions/workflows/main.yml/badge.svg)

The Web3jsModule is a NestJS module that provides a connection to Ethereum's blockchain. It uses the web3.js library, which is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.

## Features

- Easily connect to Ethereum's blockchain through Infura or other Ethereum nodes.
- Provides a service `Web3jsService` that can be injected to interact with Ethereum.
- Highly modular, can be imported anywhere in your NestJS application.

## Installation

To install this module, run:

```bash
npm install nestjs-web3js
```

Then, import `Web3jsModule` into your `AppModule`:

```javascript
@Module({
  imports: [
    Web3jsModule.forRoot({
      infuraUrl: '<Your-infura-url>',
    }),
  ],
})
export class AppModule {}
```

## Usage

Once `Web3jsModule` is imported, you can inject `Web3jsService` into your services, controllers, or providers:

```javascript
@Injectable()
export class AppService {
  constructor(private readonly web3jsService: Web3jsService) {}

  async getBalance() {
    const web3 = this.web3jsService.web3;
    const balance = await web3.eth.getBalance('Your account address');
    return balance;
  }
}
```

## API

### Web3jsModule.forRoot(options: CreateWeb3jsServiceDto): DynamicModule

The `forRoot` method accepts an options object with the following properties:

- `infuraUrl` (string): The URL to your Infura Ethereum node. This property must be a valid URL.

### Web3jsService.web3: Required<Web3>

The `web3` property is an instance of `Web3`, which is used to interact with the Ethereum blockchain. This property is read-only.

## DTO

The `CreateWeb3jsServiceDto` class is used as a type for the argument passed to the `forRoot` method. The schema for this class is as follows:

```javascript
const CreateWeb3jsServiceSchema = z
  .object({
    infuraUrl: z.string().url().min(3),
  })
  .required();
```

This schema is validated using the nestjs-zod library.

## Dependencies

This module depends on the following packages:

- [@nestjs/common](https://www.npmjs.com/package/@nestjs/common)
- [web3](https://www.npmjs.com/package/web3)
- [nestjs-zod](https://www.npmjs.com/package/nestjs-zod)

## Contribution

For issues, feature requests, and contributions, please open an issue in the repository.

## License

This project is licensed under the MIT License.

## Authors

- Cláudio Filipe Lima Rapôso - Sertão será Cloud

See also the list of [contributors](https://github.com/nestjs-web3js/contributors) who participated in this project.