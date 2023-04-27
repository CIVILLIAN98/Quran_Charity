import { useId } from "react";

export const useID = () => {
  const ID = useId();
  return ID;
};
