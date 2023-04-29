import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div className="col-span-5">
        <CounterPage initialCount={10} />
      </div>
    </div>
  );
}

export default App;
