import { useState, useEffect } from "react";

function getWindowDimensions(): number {
  const { innerWidth: width } = window;

  return width;
}

export default function useWindowDimensions(): number {
  const [windowDimensions, setWindowDimensions] = useState<number>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
