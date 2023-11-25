import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import api from '@/services/axios'
import { LotteryResult } from '@/types'

interface UseLotteryResultStore {
  getLatestResults: () => Promise<LotteryResult[]>
}

export const useLotteryResultStore = create<UseLotteryResultStore>()(
  devtools(
    immer((set, get) => ({
      getLatestResults: async () => {
        try {
          const response = await api.get<any, LotteryResult[]>('/lottery-results')
          return response
        } catch (err) {
          throw err
        }
      },
    })),
  ),
)
