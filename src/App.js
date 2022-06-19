import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="admin/*" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
