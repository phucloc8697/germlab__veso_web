import type { Metadata } from 'next'
import { fontOpenSans } from '@/fonts'
import classNames from 'classnames'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SystemStatusBar from '@/components/SystemStatusBar'

import './globals.css'
import './firework.css'

export const metadata: Metadata = {
  title: 'Veso',
  description: 'Veso by germlab.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#69140E" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={classNames(fontOpenSans.variable, 'font-sans text-dark relative')}>
        <Header />
        <SystemStatusBar />
        <Sidebar />
        {children}
      </body>
      <ToastContainer />
    </html>
  )
}
