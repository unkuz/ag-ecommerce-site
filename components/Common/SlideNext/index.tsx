import React from 'react'
import styles from './SlideNext.module.scss'
import cls from 'classnames'

export enum Btn_Type {
  PREV = 'PREV',
  NEXT = 'NEXT',
}

interface IProps {
  type: Btn_Type
}

export const SlideBtnNextPrev = ({ type }: IProps): JSX.Element => {
  return (
    <div className={`${styles.slide} ${type === Btn_Type.PREV ? styles.prev : styles.next}`}>
      {type === Btn_Type.PREV ? (
        <i className={cls('arrow_carrot-left', styles.arrow)} />
      ) : (
        <i className={cls('arrow_carrot-right', styles.arrow)} />
      )}
    </div>
  )
}
