export interface CoinInfo {
  id:          string,
  fullName:    string,
  name:        string,
  imageUrl:    string,
  url:         string,
  coinMetrics: CoinMetrics | null
}

export interface CoinMetrics {
  PRICE:            string,
  SUPPLY:           string,
  MKTCAP:           string,
  TOTALVOLUME24HTO: string
}
