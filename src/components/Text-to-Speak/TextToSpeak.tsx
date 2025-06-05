import { useState } from "react";

export const TextToSpeak = () => {
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const speak = () => {
    window.speechSynthesis.cancel();
    const x = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(x);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor="text">Text to speak: </label>
      <textarea
        id="text"
        className="p-1 border border-black rounded"
        rows={5}
        onChange={onChange}
      ></textarea>
      <button className="button" onClick={speak}>
        Speak Text
      </button>
    </div>
  );
};
