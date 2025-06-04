import './App.css';
import { HiddenSearchBox } from './projects/01-HiddenSearch/HiddenSearchBox';

const App = () => {
  return(
    <div className="flex h-full">
      <aside className="flex h-[100vh] overflow-auto flex-col items-start gap-3 p-3">
        <button className="button">Hidden Search Box</button>
      </aside>
      <main className="flex-1 flex border-l-2 justify-center items-center">
        <HiddenSearchBox />
      </main>

    </div>
  )
}

export default App;
