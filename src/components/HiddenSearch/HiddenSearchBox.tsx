import { useRef, useState } from "react";

export const HiddenSearchBox = () => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    setActive(!active);
    ref.current?.focus();
  };
  return (
    <div className="flex justify-center">
      <input
        ref={ref}
        type="text"
        name=""
        id=""
        className={`w-0 transition-all rounded-bl-lg rounded-tl-lg outline-none ${active ? "w-36 py-1 px-3 border border-black" : ""}`}
        placeholder="Search..."
      />
      <button
        onClick={onClick}
        className="border border-black cursor-pointer w-10 h-10 flex justify-center items-center"
      >
        🔍
      </button>
    </div>
  );
};
