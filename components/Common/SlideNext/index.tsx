import React from 'react'
import styles from './SlideNext.module.scss'
import cls from 'classnames'

export enum Btn_Type {
  PREV = 'PREV',
  NEXT = 'NEXT',
}

export const SlideBtnNextPrev = (props: any): JSX.Element => {
  return (
    <div
      className={`${styles.slide} ${props.type === Btn_Type.PREV ? styles.prev : styles.next}`}
      style={
        props.type === Btn_Type.PREV
          ? { left: `${props.position}px` }
          : { right: `${props.position}px` }
      }
      onClick={props.onClick}
    >
      {props.type === Btn_Type.PREV ? (
        <i className={cls('arrow_carrot-left', styles.arrow)} />
      ) : (
        <i className={cls('arrow_carrot-right', styles.arrow)} />
      )}
    </div>
  )
}
