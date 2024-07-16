import { useState, useEffect } from "react";

export function useUpdateActiveIndex(
  containerRef: React.RefObject<HTMLDivElement>
) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("1");
  useEffect(() => {
    console.log("2");
    const currentNode = containerRef?.current;
    console.log(currentNode);
    if (!currentNode) {
      return;
    }

    const scroll = () => {
      console.log("3");
      const dataContainer = currentNode.getBoundingClientRect();

      const firstElementData =
        currentNode.firstElementChild?.getBoundingClientRect();

      if (!firstElementData) {
        return;
      }

      const shift = firstElementData.left - dataContainer.left;
      console.log(dataContainer.left);
      setActiveIndex(Math.abs(Math.round(shift / dataContainer.width)));
    };

    currentNode.addEventListener("scroll", scroll);

    return () => {
      currentNode.removeEventListener("scroll", scroll);
    };
  }, [containerRef]);

  return activeIndex;
}
