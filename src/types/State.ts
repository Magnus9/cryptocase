import { CoinInfo } from '@/types/Coins'

export interface State {
  coins: CoinInfo[],
  error: string | null
}
