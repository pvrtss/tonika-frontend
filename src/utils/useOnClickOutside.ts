import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  hide: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      if (ref.current && !ref.current.contains(<HTMLDivElement>event.target)) {
        hide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, hide]);
};
