import './App.css';
import IdbDemo from './components/indexDbDemo';
import LSDemo from './components/LocalStoreDemo';
import SSDemo from './components/SessionStoreDemo';

function App() {
  return (
    <div className="App">
     <IdbDemo />
     <LSDemo />
     <SSDemo />
    </div>
  );
}

export default App;
