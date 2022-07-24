import { useEffect } from 'react'

export function useHoverAndMouseMoveZoomImage(ref: any, callback: Function) {
  const listenerMouseMove = (event: MouseEvent) => {
    if (!ref) {
      return
    }
    callback()
  }

  useEffect(() => {
    window.addEventListener('mousemove', listenerMouseMove)
    window.addEventListener('mouseout', listenerMouseMove)
    return () => {
      window.removeEventListener('mousemove', listenerMouseMove)
      window.removeEventListener('mouseout', listenerMouseMove)
    }
  })
}
