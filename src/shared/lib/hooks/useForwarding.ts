import { NavigateFunction, useNavigate } from "react-router-dom";

export function useForwarding(URL: string): () => void {
  const navigate: NavigateFunction = useNavigate();

  return () => navigate(URL);
}
