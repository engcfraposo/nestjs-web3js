import { CreateWeb3jsServiceSchema } from './create-web3js-service.dto';

describe('CreateWeb3jsServiceDto', () => {
  it('should validate and parse valid input', () => {
    const validInput = {
      infuraUrl: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
    };

    const parsedData = CreateWeb3jsServiceSchema.safeParse(validInput);

    expect(parsedData.success).toBe(true);
    expect(parsedData['data']).toEqual(validInput);
  });

  it('should invalidate and not parse invalid input', () => {
    const invalidInput = {
      infuraUrl: 'not-a-url',
    };

    const parsedData = CreateWeb3jsServiceSchema.safeParse(invalidInput);

    expect(parsedData.success).toBe(false);
  });

  it('should invalidate and not parse input with url length less than 3', () => {
    const invalidInput = {
      infuraUrl: 'ht',
    };

    const parsedData = CreateWeb3jsServiceSchema.safeParse(invalidInput);

    expect(parsedData.success).toBe(false);
  });
});
