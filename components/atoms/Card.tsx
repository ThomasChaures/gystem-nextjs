import React from 'react'

const Card = ({children, className}:{children: React.ReactNode, className: string}) => {
  return (
    <div className={`${className} bg-white rounded-2xl w-full p-10`}>{children}</div>
  )
}

export default Card