'use client'

import Card from '@/components/Card'
import LatestResult from './LatestResult'
import ForecastResult from './ForecaseResult.tsx'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 container gap-4 p-4 md:px-0 md:py-10">
        <Card className="md:col-span-2">
          <LatestResult />
        </Card>
        <Card className="h-fit">
          <ForecastResult />
        </Card>
      </div>
    </main>
  )
}
