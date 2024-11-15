import { useEffect, useRef } from "react";

export function useFirstRender() {
  const firstRender = useRef<number>(0);

  useEffect(() => {
    firstRender.current = 0;
  }, []);

  return firstRender;
}
