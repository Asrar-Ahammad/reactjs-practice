import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-screen flex items-center justify-center flex-col text-left">
        <h1>React useContext()</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
