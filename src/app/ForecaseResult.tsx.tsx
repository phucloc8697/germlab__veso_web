import { useLotteryResultStore } from '@/hooks/useLotteryResultStore'
import { LotteryCompany, LotteryGroup, LotteryResult } from '@/types'
import { formatDate } from '@/utils/date'
import { LotteryCompanies, LotteryGroups, getCompanyFromId, getGroupFromId } from '@/utils/lottery'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

type GroupResult = {
  group: string
  results: LotteryResult[]
}

const ForecastResult = () => {
  const getLatestResults = useLotteryResultStore(useShallow((state) => state.getLatestResults))
  const [data, setData] = useState<LotteryResult[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const results = await getLatestResults()
    setData(results)
  }

  const groups: GroupResult[] = useMemo(() => {
    const groupMap: { [key: string]: LotteryResult[] } = {}
    for (let result of data) {
      if (groupMap[result.group]) groupMap[result.group].push(result)
      else groupMap[result.group] = [result]
    }
    return Object.keys(groupMap).map((k) => ({
      group: k,
      results: groupMap[k],
    }))
  }, [data])

  return (
    <div className="flex flex-col p-8 gap-10">
      <h2 className="text-accent text-lg text-center font-semibold">
        Dự báo ngày mai {formatDate(dayjs().add(1, 'd'))}
      </h2>
      {groups.map((group, i) => {
        const lotteryGroup = getGroupFromId(group.group)
        return (
          <>
            {i > 0 && <hr />}
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-secondary mb-4">{lotteryGroup.name}</p>
              {group.results.map((e) => {
                const company = getCompanyFromId(e.company_id)
                return (
                  <div key={e.company_id} className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Xổ số {company.name}</span>
                    <span className="text-accent font-semibold">{e.prize0}</span>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ForecastResult
