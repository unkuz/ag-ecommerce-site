import { Btn_Type, SlideBtnNextPrev } from '@@/components/Common/SlideNext'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import styles from './Slice.module.scss'

const images = [
  { id: 1, img: 'images/12.png' },
  { id: 2, img: 'images/1.webp' },
  { id: 3, img: 'images/2.webp' },
]

export const Slide = (): JSX.Element => {
  const containerRef = useRef<HTMLInputElement>(null)

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
  }, [currentIdx, widthContainer])

  const onResize = useCallback(() => {
    setwidthContainer(containerRef.current!.getClientRects()[0].width)
  }, [])

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    <div className={cls('grid_item', styles.slide_container)}>
      <div className={cls(styles.slide)} ref={containerRef}>
        {images.map((i) => (
          <img key={i.id} src={i.img} alt="" />
        ))}
      </div>
      <div
        onClick={() => {
          onNextPrev(Btn_Type.NEXT)
        }}
      >
        <SlideBtnNextPrev type={Btn_Type.NEXT} />
      </div>
      <div
        onClick={() => {
          onNextPrev(Btn_Type.PREV)
        }}
      >
        <SlideBtnNextPrev type={Btn_Type.PREV} />
      </div>
      <div className={styles.dot}>
        {images.map((i, idx) => (
          <div key={i.id} style={{ background: currentIdx === idx ? '#FFBA15' : '#999999' }}></div>
        ))}
      </div>
    </div>
  )
}
