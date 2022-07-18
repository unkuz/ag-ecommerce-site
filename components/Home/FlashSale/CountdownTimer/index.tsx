import React from 'react'
import { useCountdown } from '@@/hooks/useCountdown'
import { ExpiredNotice } from '../ExpiredNotice'

export const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  }
  return (
    <div className="flash_time">
      <div className="end_time">Kết thúc trong:</div>
      <div id="clockdown">
        <span className="days">{days}</span>
        <span className="hours">{hours}</span>
        <span className="minutes">{minutes}</span>
        <span className="seconds">{seconds}</span>
      </div>
    </div>
  )
}
