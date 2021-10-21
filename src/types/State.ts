import { CoinInfo } from '@/types/Coins'

export interface State {
  coins:      CoinInfo[],
  error:      string | null,
  // Reference to setInterval which polls the crypto endpoint.
  intervalId: number
}
