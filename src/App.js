import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import WordsNumbers from './components/WordsNumbers';
import WordsColor from './components/WordsColor';

function App() {
  return (
    <div className="App mt-4">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Welcome />} />
          <Route path='/:variable' element={<WordsNumbers />} />
          <Route path='/:word/:color/:background' element={<WordsColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
