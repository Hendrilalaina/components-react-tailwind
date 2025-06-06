import { useEffect, useRef, useState } from "react";
import "./CircularProgress.css";

export const CircularProgress = () => {
  const progress = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<number>(0);
  const intervalID = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalID.current !== null) {
        clearInterval(intervalID.current);
      }
    };
  }, []);

  const load = () => {
    if (intervalID !== null) {
      clearInterval(intervalID.current!);
    }
    intervalID.current = window.setInterval(() => {
      setValue((prevValue) => {
        if (prevValue === 100) {
          clearInterval(intervalID.current!);
          return prevValue;
        } else {
          const newValue = prevValue + 10;
          progress.current?.setAttribute("data-value", String(newValue));
          progress.current?.style.setProperty(
            "--progress",
            newValue * 3.6 + "deg"
          );
          return newValue;
        }
      });
    }, 400);
  };
  const reset = () => {
    setValue(0);
    progress.current?.setAttribute("data-value", "0");
    progress.current?.style.setProperty("--progress", "0deg");
  };

  const resize = (size: string) => {
    let newSize = "";
    switch (size) {
      case "Small":
        newSize = "60px";
        break;
      case "Medium":
        newSize = "100px";
        break;
      case "Big":
        newSize = "130px";
        break;
      default:
        break;
    }
    progress.current?.style.setProperty("--size", newSize);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="progress" data-value="0" ref={progress}></div>
      <button className="button mt-2" onClick={load}>
        Simulate download
      </button>
      <button className="button mt-2" onClick={reset}>
        Reset
      </button>
      <button className="button mt-2" onClick={() => resize("Small")}>
        Small
      </button>
      <button className="button mt-2" onClick={() => resize("Medium")}>
        Medium
      </button>
      <button className="button mt-2" onClick={() => resize("Big")}>
        Big
      </button>
    </div>
  );
};
