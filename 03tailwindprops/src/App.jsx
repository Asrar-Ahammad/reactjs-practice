import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <div className="main_contanier flex justify-center gap-2 items-center w-full h-screen">
      <Card username="Asrar" btnText="Visit me"/>
      <Card username="Asrar"/>
      </div>
    </>
  );
}

export default App;
