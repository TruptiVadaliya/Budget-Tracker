import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/Component/Home';
import TransactionForm from '../src/Component/TransactionForm';
import EditTransaction from '../src/Component/EditTransction';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">BudgetApp</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TransactionForm />} />
        <Route path="/edit/:id" element={<EditTransaction />} />
      </Routes>
    </Router>
  );
};

export default App;
