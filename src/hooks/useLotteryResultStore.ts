import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import api from '@/services/axios'
import { LotteryResult } from '@/types'
import dayjs, { Dayjs } from 'dayjs'
import { formatDate } from '@/utils/date'

interface GetHistoryResults {
  companyId: string
  drawnAt: Date | Dayjs
}

interface UseLotteryResultStore {
  results: LotteryResult[]
  getLatestResults: () => Promise<LotteryResult[]>
  getHistoryResults: (params: GetHistoryResults) => Promise<LotteryResult[]>
}

export const useLotteryResultStore = create<UseLotteryResultStore>()(
  devtools(
    immer((set, get) => ({
      results: [],
      getLatestResults: async () => {
        try {
          const response = await api.get<any, LotteryResult[]>('/lottery-results')
          set({ results: response })
          return response
        } catch (err) {
          throw err
        }
      },
      getHistoryResults: async (params: GetHistoryResults) => {
        try {
          const response = await api.get<any, LotteryResult[]>('/lottery-result-company', {
            params: {
              company_id: params.companyId,
              drawn_at: formatDate(params.drawnAt),
            },
          })
          return response
        } catch (err) {
          throw err
        }
      },
    })),
  ),
)
