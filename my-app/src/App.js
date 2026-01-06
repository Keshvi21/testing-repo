import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Loader from './pages/Loader';
import ResultSummary from './pages/ResultSummary';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/result" element={<ResultSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
