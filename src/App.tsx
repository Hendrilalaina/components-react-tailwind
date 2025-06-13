import { useState } from "react";
import "./App.css";
import { HiddenSearchBox } from "./components/HiddenSearch/HiddenSearchBox";
import { QRCodeGenerator } from "./components/QRCode-Generator/QRCode-Generator";
import { TextToSpeak } from "./components/Text-to-Speak/TextToSpeak";
import { CircularProgress } from "./components/Circular-Progress/CircularProgress";
import { MatCaptcha } from "./components/Math-Captcha/MathCaptcha";
import { DarkMode } from "./components/Dark-Mode/DarkMode";
import { CaptureWebcamImage } from "./components/Capture-Webcam-Image/CaptureWebcamImage";
import { CaptureScreen } from "./components/Capture-Screen/CaptureScreen";

const App = () => {
  const [index, setIndex] = useState(0);
  const components = [
    { label: "Hidden Searh Box", component: <HiddenSearchBox /> },
    { label: "QRCode Generator", component: <QRCodeGenerator /> },
    { label: "Text to Speak", component: <TextToSpeak /> },
    { label: "Circular Progress", component: <CircularProgress /> },
    { label: "Math Captcha", component: <MatCaptcha /> },
    { label: "Toggle Mode", component: <DarkMode /> },
    { label: "Capture Webcam Image", component: <CaptureWebcamImage /> },
    { label: "Capture Screen", component: <CaptureScreen /> },
  ];
  return (
    <div className="flex h-full">
      <aside className="flex h-[100vh] overflow-auto flex-col items-start gap-3 p-3">
        <ul>
          {components.map((item, id) => (
            <li
              key={id}
              className="button cursor-pointer p-3 border border-fuchsia-300 rounded-lg mb-1"
              onClick={() => setIndex(id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 flex border-l-2 justify-center items-center">
        {components[index].component}
      </main>
    </div>
  );
};

export default App;
