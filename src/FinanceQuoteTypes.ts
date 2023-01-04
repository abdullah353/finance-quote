type MetaInterval = Readonly<{
  timezone: string,
  start: number,
  end: number,
  gmtoffset: number,
}>

type MetaCurrentTradingPeriod = Readonly<{
  pre: MetaInterval,
  regular: MetaInterval,
  post: MetaInterval,
}>

type CurrencyPairMeta = Readonly<{
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
}>

export type QuoteResponseSchema = Readonly<{
  meta: CurrencyPairMeta,
  timestamp: number[],
  indicators: Record<string, unknown>
}>
