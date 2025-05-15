import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExpenseTracker from './components/ExpenseTracker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ecommerce from './components/Ecommerce';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ExpenseTracker/>} />
        <Route path='/ecommerce' element={<Ecommerce/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
