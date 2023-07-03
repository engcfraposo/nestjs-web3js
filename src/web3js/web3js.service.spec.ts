import { Test, TestingModule } from '@nestjs/testing';
import Web3 from 'web3';
import { Web3jsService } from './web3js.service';

describe('Web3jsService', () => {
  let service: Web3jsService;
  let mockWeb3: Web3;

  beforeEach(async () => {
    mockWeb3 = new Web3(); // replace with proper mock as per your needs

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: Web3,
          useValue: mockWeb3,
        },
        Web3jsService,
      ],
    }).compile();

    service = module.get<Web3jsService>(Web3jsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the same Web3 instance', () => {
    const web3Instance = service.web3;
    expect(web3Instance).toBe(mockWeb3);
  });
});
