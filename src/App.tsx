import { Outlet } from "react-router-dom";
import CurrencyDropdown from "./components/header/currency-dropdown";
import LanguageDropdown from "./components/header/language-dropdown";

function App() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between bg-zinc-800/50 w-full h-fit p-2 gap-y-2">
        <div className="w-20 sm:w-1/4 h-9 bg-zinc-800 rounded-full"></div>
        <div className="flex flex-wrap gap-2">
          <CurrencyDropdown />
          <LanguageDropdown />
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-2 h-full overflow-y-scroll">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
