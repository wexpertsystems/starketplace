import create from 'zustand'
import Account from '../account'
import Api from '../api'
import Star from '../types/Star'

export interface Store {
  account: Account
  api: Api
  dust: number
  stars: Star[]
  treasuryBalance: number
  gasPrice: number
  loading: boolean
  successTxHashes: string[]
  errorMessage?: string
  setAccount: (account: Account) => void
  setDust: (dust: number) => void
  setStars: (stars: Star[]) => void
  setTreasuryBalance: (balance: number) => void
  setGasPrice: (gasPrice: number) => void
  setLoading: (loading: boolean) => void
  setSuccessTxHashes: (successTxHashes: string[]) => void
  setErrorMessage: (errorMessage: string) => void
}

export const useStore = create<Store>(set => ({
  account: new Account({}),
  api: new Api(new Account({})),
  gasPrice: 20,
  dust: 0,
  stars: [],
  treasuryBalance: 0,
  loading: false,
  successTxHashes: [],
  setAccount: (account: Account) => set(() => ({ account, api: new Api(account) })),
  setDust: (dust: number) => set(() => ({ dust })),
  setStars: (stars: Star[]) => set(() => ({ stars: stars.sort((a, b) => Number(b.isUnlinked) - Number(a.isUnlinked) ) })),
  setTreasuryBalance: (treasuryBalance: number) => set(() => ({ treasuryBalance })),
  setGasPrice: (gasPrice: number) => set(() => ({ gasPrice })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
  setSuccessTxHashes: (successTxHashes: string[]) => set(() => ({ successTxHashes })),
  setErrorMessage: (errorMessage: string) => set(() => ({ errorMessage })),
}))
