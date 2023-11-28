import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import api from '@/services/axios'
import { LotteryResult } from '@/types'

type SystemStatus = {
  last_sync: number
}

interface UseSystemStore extends SystemStatus {
  getSystemStatus: () => Promise<SystemStatus>
}

export const useSystemStore = create<UseSystemStore>()(
  devtools(
    immer((set, get) => ({
      last_sync: 0,
      getSystemStatus: async () => {
        try {
          const response = await api.get<any, SystemStatus>('/system')
          set({ last_sync: response.last_sync })
          return response
        } catch (err) {
          throw err
        }
      },
    })),
  ),
)
