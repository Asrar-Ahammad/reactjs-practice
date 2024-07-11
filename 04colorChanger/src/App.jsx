import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="main w-full h-screen flex items-end justify-center pb-8"
        style={{ backgroundColor: color }}
      >
        <div className="container w-4/5 border-black p-4 bg-slate-200 rounded-3xl flex justify-around items-center">
          <button
            onClick={() => setColor("#F77171")}
            className="bg-red-400 text-white p-3 rounded-2xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("#49DE80")}
            className="bg-green-400 text-white p-3 rounded-2xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("#5FA5F9")}
            className="bg-blue-400 text-white p-3 rounded-2xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#FB923C")}
            className="bg-orange-400 text-white p-3 rounded-2xl"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#94A3B8")}
            className="bg-slate-400 text-white p-3 rounded-2xl"
          >
            Slate
          </button>
          <button
            onClick={() => setColor("#FACC14")}
            className="bg-yellow-400 text-white p-3 rounded-2xl"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#F471B5")}
            className="bg-pink-400 text-white p-3 rounded-2xl"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("#FFFFFF")}
            className="bg-white text-black p-3 rounded-2xl"
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
