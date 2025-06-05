import { useState } from "react";
import "./App.css";
import { HiddenSearchBox } from "./components/HiddenSearch/HiddenSearchBox";
import { QRCodeGenerator } from "./components/QRCode-Generator/QRCode-Generator";

const App = () => {
  const [index, setIndex] = useState(0);
  const components = [
    { label: "Hidden Searh Box", component: <HiddenSearchBox /> },
    { label: "QRCode Generator", component: <QRCodeGenerator /> },
  ];
  return (
    <div className="flex h-full">
      <aside className="flex h-[100vh] overflow-auto flex-col items-start gap-3 p-3">
        {components.map((item, id) => (
          <button key={id} className="button" onClick={() => setIndex(id)}>
            {item.label}
          </button>
        ))}
      </aside>
      <main className="flex-1 flex border-l-2 justify-center items-center">
        {components[index].component}
      </main>
    </div>
  );
};

export default App;
