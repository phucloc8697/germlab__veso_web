'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { toast } from 'react-toastify'

import vi from 'date-fns/locale/vi'
import 'react-datepicker/dist/react-datepicker.css'

import Card from '@/components/Card'
import Spinner from '@/components/Spinner'
import { useLotteryResultStore } from '@/hooks/useLotteryResultStore'
import { LotteryCompanies, getCompanyFromId, getPrizeName } from '@/utils/lottery'
import { useShallow } from 'zustand/react/shallow'

type WinResult = {
  prize: number
  company: string
  expect: string
}

const CheckDigits = () => {
  const { getHistoryResults } = useLotteryResultStore(
    useShallow((state) => ({
      getHistoryResults: state.getHistoryResults,
    })),
  )
  const [digits, setDigits] = useState('')
  const [drawnAt, setDrawnAt] = useState<Date | null>(null)
  const [companyId, setCompanyId] = useState<string>()
  const [firstEnter, setFirstEnter] = useState(true)
  const [winResults, setWinResults] = useState<WinResult[]>([])
  const [checking, setChecking] = useState(false)
  const [fireworkAnim, setFireworkAnim] = useState(false)

  useEffect(() => {
    if (winResults.length > 0) {
      setFireworkAnim(true)
      setTimeout(() => setFireworkAnim(false), 5000)
    }
  }, [winResults])

  const onSubmit = async () => {
    if (!companyId || !drawnAt) return toast.error('Vui lòng chọn công ty và ngày xổ số')
    try {
      setChecking(true)
      const results = await getHistoryResults({ companyId, drawnAt: drawnAt })
      let ans: WinResult[] = []
      for (let result of results) {
        for (let i = 0; i < 9; i++) {
          const expects = (result as { [key: string]: any })[`prize${i}`] as string[]
          for (let e of expects) {
            if (digits === e || (e.length < digits.length && digits.slice(-e.length) === e)) {
              ans.push({
                prize: i,
                expect: e,
                company: result.company_id,
              })
            }
          }
        }
      }
      setWinResults(ans)
    } finally {
      setChecking(false)
      setFirstEnter(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <h2 className="text-accent text-lg text-center font-semibold mb-10">Dò số đã xổ</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <input
              className="border px-4 py-2"
              value={digits}
              placeholder="Ví dụ: 68, 915, 582783,..."
              onKeyUp={(e) => {
                if (e.key === 'Enter') onSubmit()
              }}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return
                if (Number(e.target.value) > 999999) return
                setDigits(e.target.value)
              }}
            />
            <DatePicker
              locale={vi}
              dateFormat="dd/MM/yyyy"
              className="w-full"
              placeholderText="Ngày xổ số (tùy chọn)"
              selected={drawnAt}
              onChange={(date) => setDrawnAt(date)}
            />
            <Select
              classNamePrefix="react-select"
              options={Object.values(LotteryCompanies).map((e) => ({ label: e.name, value: e.id }))}
              placeholder="Chọn công ty (tùy chọn)"
              onChange={(e) => setCompanyId(e?.value)}
            />
          </div>
          <button onClick={onSubmit}>
            {checking ? <Spinner className="mx-auto" /> : 'Kiểm tra'}
          </button>
        </div>
      </Card>
      {!firstEnter && (
        <Card className="relative">
          <div className={classNames('absolute w-full h-full pyro')}>
            <div className={classNames(fireworkAnim && 'after')} />
          </div>
          {winResults.length === 0 && !checking && <div>Không trúng giải nào</div>}
          {winResults.length > 0 && !checking && (
            <div className="flex flex-col p-2">
              <div className="text-center font-semibold mb-10">🎉🎉🎉🎉 CHÚC MỪNG 🎉🎉🎉🎉</div>
              <div className="flex flex-col gap-2">
                {winResults.map((e) => (
                  <div
                    key={`${e.company}-${e.expect}`}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">
                      {getPrizeName(e.prize)} - {getCompanyFromId(e.company).name}:
                    </span>
                    <span className="font-medium text-center">{e.expect}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}

export default CheckDigits
