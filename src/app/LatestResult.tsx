'use client'

import { useLotteryResultStore } from '@/hooks/useLotteryResultStore'
import { LotteryCompany, LotteryResult } from '@/types'
import { formatDate } from '@/utils/date'
import { LotteryCompanies, getGroupFromId } from '@/utils/lottery'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

type GroupResult = {
  group: string
  results: LotteryResult[]
}

const LatestResult = () => {
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

  const PrizeLabel = ({ text }: { text: string }) => (
    <span className="text-sm font-semibold">{text}</span>
  )

  const PrizeCell = ({ data }: { data: string[] }) => (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {data.map((text) => (
        <span key={text} className="font-medium text-sm">
          {text}
        </span>
      ))}
    </div>
  )

  const TableCell = ({ children, width }: { children: ReactNode; width?: number | string }) => (
    <td
      style={{ ...(width && { maxWidth: width, minWidth: width }) }}
      className="bg-white border px-2 md:px-4 py-2 text-center"
    >
      {children}
    </td>
  )

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-lg text-accent text-center font-semibold">Kết quả xổ số mới nhất</h2>
      {groups.map((group) => {
        const lotteryGroup = getGroupFromId(group.group)
        const resultDate = group.results.length > 0 ? group.results[0].drawn_at : null
        return (
          <div key={group.group}>
            <h3 className="font-semibold">
              Xổ số {lotteryGroup.name} ngày{' '}
              {resultDate ? formatDate(resultDate) : '<không xác định>'}
            </h3>
            <div className="relative bg-red-50 rounded-xl overlow-hidden">
              <div className="mt-4">
                <table className="border-collapse w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b bg-red-50 p-2" />
                      {group.results.map((e) => {
                        const company = (LotteryCompanies as { [key: string]: LotteryCompany })[
                          e.company_id
                        ] as LotteryCompany
                        return (
                          <th key={e.company_id} className="border-b bg-red-50 p-2">
                            <span className="text-sm font-semibold">
                              {company ? company.name : null}
                            </span>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableCell width="50px">
                        <PrizeLabel text="Giải tám" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize8 || []} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải bảy" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize7} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải sáu" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize6} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải năm" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize5} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải bốn" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize4} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải ba" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize3} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải nhì" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize2} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải nhất" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize1} />
                        </TableCell>
                      ))}
                    </tr>
                    <tr>
                      <TableCell>
                        <PrizeLabel text="Giải đặc biệt" />
                      </TableCell>
                      {group.results.map((e) => (
                        <TableCell key={e.company_id}>
                          <PrizeCell data={e.prize0} />
                        </TableCell>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LatestResult
