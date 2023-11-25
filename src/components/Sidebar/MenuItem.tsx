import classNames from 'classnames'
import { ReactNode } from 'react'

interface MenuItemProps {
  text: string | ReactNode
  active?: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const MenuItem = (props: MenuItemProps) => {
  const { text, active, onClick } = props

  return (
    <div
      className={classNames(
        'flex items-center px-5 py-2 rounded transition duration-300',
        'hover:shadow-lg hover:bg-white cursor-pointer',
        active ? 'text-white font-semibold' : 'text-light',
      )}
      onClick={onClick}
    >
      <span className="flex-1">{text}</span>
    </div>
  )
}

export default MenuItem
