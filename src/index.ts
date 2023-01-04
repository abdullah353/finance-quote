import axios from 'axios';

type MetaInterval = {
  timezone: string,
  start: number,
  end: number,
  gmtoffset: number,
}

type MetaCurrentTradingPeriod = {
  pre: MetaInterval,
  regular: MetaInterval,
  post: MetaInterval,
}

type CurrencyPairMeta = {
  currency: string,
  symbol: string,
  exchangeName: string,
  instrumentType: string,
  firstTradeDate: number,
  regularMarketTime: number,
  gmtoffset: number,
  timezone: string,
  exchangeTimezoneName: string,
  regularMarketPrice: number,
  chartPreviousClose: number,
  previousClose: number,
  scale: number,
  priceHint: number,
  currentTradingPeriod: MetaCurrentTradingPeriod,
}

type QuoteResponseSchema = {
  meta: CurrencyPairMeta,
  timestamp: number[],
  indicators: Record<string, unknown>
}

export async function getQuote(symbols: string[]) {
  return await axios.get<{spark: {result: {symbol: string, response: QuoteResponseSchema[]}[], error: unknown}}>(
    `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols.map(x => `${x}=X`).join(',')}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
}