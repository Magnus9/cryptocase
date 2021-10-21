export interface CoinInfo {
  id:              string,
  fullName:        string,
  name:            string,
  imageUrl:        string,
  url:             string,
  algorithm:       string,
  proofType:       string,
  maxSupply:       string,
  assetLaunchDate: string,
  blockNumber:     string,
  blockTime:       string,
  blockReward:     string,
  coinMetrics:     CoinMetrics | null
}

export interface CoinMetrics {
  PRICE:            string,
  SUPPLY:           string,
  MKTCAP:           string,
  TOTALVOLUME24HTO: string,
  LASTMARKET:       string
}
