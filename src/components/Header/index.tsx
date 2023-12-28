'use client'

import { useSidebarStore } from '@/store/useSidebarStore'
import { Menus } from '@/utils/navigation'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Header = () => {
  const toggleSidebar = useSidebarStore(useShallow((state) => state.toggleSidebar))
  const pathname = usePathname()

  const prevScrollPos = useRef(0)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const header = document.getElementById('header')
    if (!header) return
    if (currentScrollPos > prevScrollPos.current) {
      header.classList.add('hide')
    } else {
      header.classList.remove('hide')
    }
    if (currentScrollPos === 0) {
      header.classList.add('atTop')
    } else {
      header.classList.remove('atTop')
    }
    prevScrollPos.current = currentScrollPos
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={classNames(
        'flex items-center justify-between',
        'transition duration-300',
        'shadow-sm bg-primary text-white px-4',
      )}
    >
      <div className="flex items-center gap-2">
        <button className="md:hidden rounded p-2 text-3xl" onClick={toggleSidebar}>
          <i className="bx bx-menu" />
        </button>
        <strong>VESO</strong>
        <div className="hidden md:flex items-center ml-10 gap-10">
          {Menus.map((e) => (
            <Link
              key={e.label}
              href={e.url}
              className={classNames(
                'text-sm text-light p2',
                'hover:text-white hover:font-medium',
                e.url === pathname && 'text-white font-semibold border-b border-white',
              )}
            >
              {e.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end text-sm"></div>
    </header>
  )
}

export default Header
