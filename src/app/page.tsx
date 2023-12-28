import Card from '@/components/Card'
import LatestResult from './LatestResult'
import QuickCheckDigits from './QuickCheckDigits'
import CheckDigits from './CheckDigits.tsx'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col md:flex-row-reverse container gap-4 px-4 md:px-0">
        <div style={{ minWidth: 350, maxWidth: 500 }}>
          <div className="flex flex-col gap-4">
            <QuickCheckDigits />
            <CheckDigits />
          </div>
        </div>
        <Card className="flex-1">
          <LatestResult />
        </Card>
      </div>
    </main>
  )
}
