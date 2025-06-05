import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

export const QRCodeGenerator = () => {
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="font-bold">QR Code Generator</h1>
      <div className="flex items-center gap-3">
        <label htmlFor="text">Enter some text or URL</label>
        <input
          type="text"
          name=""
          id=""
          className="p-1 border border-black rounded-lg"
          placeholder="Enter some text or URL"
          onChange={onChange}
        />
      </div>
      {text && <QRCodeCanvas value={text} />}
    </div>
  );
};
