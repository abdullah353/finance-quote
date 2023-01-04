import { getRawQuotes, getQuotes } from '../dist/index';

describe('Testing Get Quote', function () {

  it('should be able to build', function () {
    expect(getRawQuotes instanceof Object).toBeTruthy()
    expect(getQuotes instanceof Object).toBeTruthy()
  })

  it('should be able to get cad usd quote', async function () {
    const resp = await getQuotes(["CADUSD"])
    expect(resp instanceof Object)
  });
});