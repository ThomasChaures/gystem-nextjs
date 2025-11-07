import React from 'react'

const Card = ({children, className}:{children: React.ReactNode, className: string}) => {
  return (
    <div className={`${className} bg-white rounded-2xl w-full border-[#d1d1d1]/50 border p-10`}>{children}</div>
  )
}

export default Card