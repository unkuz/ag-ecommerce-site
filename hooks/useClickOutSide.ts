import { useEffect } from 'react'

export function useClickOutSide(ref: any, callback: Function) {
  const listener = (event: MouseEvent) => {
    if (!ref || ref.contains(event.target)) {
      return
    }
    callback()
  }

  useEffect(() => {
    window.addEventListener('click', listener)
    return () => {
      window.removeEventListener('click', listener)
    }
  })
}
