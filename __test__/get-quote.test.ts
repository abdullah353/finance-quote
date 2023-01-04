import { getQuote } from '../dist/index';

describe('Testing Get Quote', function () {
  beforeEach(() => {});

  it('should be able to build', function () {
    expect(getQuote instanceof Object).toBeTruthy();
  });
  it('should be able to get cad usd quote', async function () {
    const resp = await getQuote(["CADUSD"])
    expect(resp instanceof Object)
  });
});