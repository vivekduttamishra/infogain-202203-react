import './css/index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/Home'
import AddBook from './screens/addbook/AddBook'

function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' exact element={<Home/>} />
        <Route path='/book/add' exact element={<AddBook/>} />
      </Routes >
    </Router>
  );
}

export default App;
