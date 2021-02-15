import { useWindowSize } from "./useWindowSize";

export const useIsMobile = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);
  if (windowSize.width !== null && windowSize.width < 768) return true;
  return false;
};
