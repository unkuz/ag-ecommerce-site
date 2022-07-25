import React from 'react'
import styles from './SlideNext.module.scss'
import cls from 'classnames'

export enum Btn_Type {
  PREV = 'PREV',
  NEXT = 'NEXT',
}

export const SlideBtnNextPrev = (props: any): JSX.Element => {
  const stylePositionBtn =
    props.type === Btn_Type.PREV
      ? { left: `${props.position}px`, top: props.height ? `${props.height / 2}px` : '50%' }
      : { right: `${props.position}px`, top: props.height ? `${props.height / 2}px` : '50%' }

  return (
    <div
      className={`${styles.slide} ${props.type === Btn_Type.PREV ? styles.prev : styles.next}`}
      style={stylePositionBtn}
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
