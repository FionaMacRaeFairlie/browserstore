import "./App.css";
import CookieDemo from "./components/CookieDemo";
import IdbDemo from "./components/indexDbDemo";
import LSDemo from "./components/LocalStoreDemo";
import SSDemo from "./components/SessionStoreDemo";

function App() {
  return (
    <div className="App">
      <CookieDemo />
      <IdbDemo />
      <LSDemo />
      <SSDemo />
    </div>
  );
}

export default App;
