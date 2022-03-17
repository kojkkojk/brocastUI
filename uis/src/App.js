import './App.css';
import { Route, Routes } from "react-router-dom";
import Console from './components/consoles/Console';
import Main from './components/Main';
function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Console />} />
          <Route path='/loluis' element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
