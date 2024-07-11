import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //* useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*(){}[]`~-_=+|<>,./?;:'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, setPassword, passwordGenerator]);

  return (
    <>
      <div className="main h-screen flex items-center justify-center bg-black flex-col">
        <div className="card w-1/2 h-fit p-12 bg-teal-500 rounded-2xl">
          <h1 className="text-center text-xl mb-4 text-white">
            Password generator
          </h1>
          <div className="flex w-full items-center space-x-2">
            <input
              className="flex bg-white h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder={password}
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={copyPasswordToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <label htmlFor="length" className="mr-2 text-white">
              length ({length})
            </label>
            <input
              type="range"
              name=""
              id="length"
              className="cursor-pointer"
              min={8}
              max={65}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="number" className="ml-4 text-white">
              number
            </label>
            <input
              type="checkbox"
              name="number"
              id="number"
              className="ml-2"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="character" className="ml-4 text-white">
              character
            </label>
            <input
              type="checkbox"
              name="number"
              id="character"
              className="ml-2"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
