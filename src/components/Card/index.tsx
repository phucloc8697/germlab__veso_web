import classNames from 'classnames'
import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  const { className, children } = props
  return (
    <div className={classNames('d-flex flex-col', 'rounded bg-white shadow-sm', className)}>
      {children}
    </div>
  )
}

export default Card
