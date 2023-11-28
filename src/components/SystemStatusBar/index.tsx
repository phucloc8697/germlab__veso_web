'use client'

import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useSystemStore } from '@/hooks/useSystemStore'
import { formatDate, formatDateTime } from '@/utils/date'

const SystemStatusBar = () => {
  const last_sync = useSystemStore((state) => state.last_sync)
  const getSystemStatus = useSystemStore(useShallow((state) => state.getSystemStatus))

  useEffect(() => {
    getSystemStatus()
  }, [getSystemStatus])

  return (
    <div id="system-status-bar" className="w-full px-4 md:px-0">
      <div className="h-full container mx-auto flex items-center content-between">
        {!!last_sync && (
          <div className="flex items-center gap-1">
            <i className="bx bx-sync text-xl" />
            <span className="text-sm text-dark">
              Cập nhật lần cuối vào {formatDateTime(last_sync)}
            </span>
          </div>
        )}
      </div>
      <div />
    </div>
  )
}

export default SystemStatusBar
