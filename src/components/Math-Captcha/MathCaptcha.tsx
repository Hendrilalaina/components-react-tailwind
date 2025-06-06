import { useEffect, useState } from "react";

export const MatCaptcha = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [isCorrect, setCorrect] = useState<boolean | undefined>();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setNumbers([num1, num2]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const captchaCheck = () => {
    if (parseInt(answer) === numbers[0] + numbers[1]) {
      setCorrect(true);
    } else {
      setCorrect(false);
      generateCaptcha();
    }
    setAnswer("");
  };

  useEffect(generateCaptcha, []);

  return (
    <div className="flex flex-col gap-3 items-start">
      <div>
        What is {numbers[0]} + {numbers[1]} ?
      </div>
      <input
        type="text"
        className="input margin-top  rounded-lg outline-none w-36 py-1 px-3 border border-black"
        placeholder="Enter your answer"
        onChange={onChange}
      />
      <button className="button" onClick={captchaCheck}>
        Submit
      </button>
      <div>
        {isCorrect && "Correct ✅"}
        {isCorrect === false && "Incorrect ❌"}
      </div>
    </div>
  );
};
