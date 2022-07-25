import React from 'react'
import Image from 'next/image'

export const ScrollTop = (): JSX.Element => {
  const onScrollToTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button onClick={onScrollToTop} className="scroll_top">
      <Image
        src="/images/left.png"
        style={{ borderRadius: '50%' }}
        alt=""
        width="40px"
        height="40px"
      />
    </button>
  )
}
