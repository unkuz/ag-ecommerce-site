import { useEffect } from "react";

export function useHoverOutSide(ref: any, callback: Function) {
  const listener = (event: MouseEvent) => {
    if (!ref || ref.contains(event.target)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    window.addEventListener("mousemove", listener);
    return () => {
      window.removeEventListener("mousedown", listener);
    };
  });
}
