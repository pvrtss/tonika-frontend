import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el: HTMLDivElement | null = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent)=> {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY*5,
          behavior: 'smooth'
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}