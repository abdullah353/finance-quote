import axios from "axios"
import {QuoteResponseSchema} from "./FinanceQuoteTypes"

export async function getQuotes(symbols: string[]) {
  const resp = await getRawQuotes(symbols)
  return  resp.data.spark.result.reduce((acc, val) => {
    acc[val.symbol.replace("=X", "")] = val.response[0].meta.regularMarketPrice
    return acc
  }, {} as Record<string, number>)
}

export async function getRawQuotes(symbols: string[], raw: boolean = false) {
  return  await axios.get<{spark: {result: {symbol: string, response: QuoteResponseSchema[]}[], error: unknown}}>(
    `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols.map(x => `${x}=X`).join(',')}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )
}