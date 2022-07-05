import "./App.css";
import Login from "./ContextApi/Login";
import { ContextProvider } from "./ContextApi/Context";
import Profile from "./ContextApi/Profile";

function App() {
  return (
    <>
      <div className="App">
        <ContextProvider>
          <Login />
          <Profile />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
