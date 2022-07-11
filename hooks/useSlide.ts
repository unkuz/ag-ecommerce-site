import { Btn_Type } from '@@/components/Common/SlideNext'
import { useCallback, useEffect, useRef, useState } from 'react'

type IImage = {
  id: string
  image: string
}[]

export const useSlide = (containerRef: any, images: any) => {
  const [widthContainer, setwidthContainer] = useState<number>(0)

  const [currentIdx, setCurrentIdx] = useState<number>(0)

  const onNextPrev = (type: Btn_Type) => {
    let totalImg = images.length
    if (currentIdx >= totalImg! - 1 && type === Btn_Type.NEXT) {
      return
    }
    if (currentIdx === 0 && type === Btn_Type.PREV) {
      return
    }
    setCurrentIdx((prev) => prev + (type === Btn_Type.NEXT ? 1 : -1))
  }

  useEffect(() => {
    containerRef.current!.style.transform = `translateX(${-widthContainer * currentIdx}px)`
  }, [containerRef, currentIdx, widthContainer])

  const onResize = useCallback(() => {
    setwidthContainer(containerRef.current!.getClientRects()[0].width)
  }, [containerRef])

  const touchStart = (e: TouchEvent) => {
    console.log(e)
  }
  const touchEnd = (e: TouchEvent) => {
    console.log(e)
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    containerRef.current.addEventListener('touchstart', touchStart)
    containerRef.current.addEventListener('touchend', touchEnd)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [containerRef, onResize])

  return { onNextPrev, currentIdx }
}
