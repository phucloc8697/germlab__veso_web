'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'

import Card from '@/components/Card'
import Spinner from '@/components/Spinner'
import { useLotteryResultStore } from '@/hooks/useLotteryResultStore'
import { checkLotteryResults, getCompanyFromId, getPrizeName } from '@/utils/lottery'
import { WinResult } from '@/types'

const QuickCheckDigits = () => {
  const latestResuts = useLotteryResultStore((state) => state.results)
  const [digits, setDigits] = useState('')
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

  const onSubmit = () => {
    setChecking(true)
    setWinResults(checkLotteryResults(latestResuts, digits))
    setTimeout(() => {
      setChecking(false)
      setFirstEnter(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <h2 className="text-accent text-lg text-center font-semibold mb-10">Dò nhanh</h2>
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

export default QuickCheckDigits
