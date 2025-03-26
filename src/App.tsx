import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header></header>
      <main className="flex flex-col items-center justify-center p-2 h-screen">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
