export interface QuotesDto {
  code: string
  msg: string
  data: QuotationDto[]
}

export interface QuotationDto {
  sequence: number
  symbol: string
  side: string
  size: number
  price: string
  bestBidSize: number
  bestBidPrice: string
  bestAskPrice: string
  tradeId: string
  bestAskSize: number
  ts: number
}
