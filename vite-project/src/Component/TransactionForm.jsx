import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, editTransaction } from '../Redux/BudgetSlice';
import { useNavigate } from 'react-router-dom';

const TransactionForm = ({ editData = null }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(editData || { description: '', amount: '', type: 'income' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount) return;
    if (editData) {
      dispatch(editTransaction(form));
    } else {
      dispatch(addTransaction({ ...form, id: Date.now() }));
    }
    navigate("/");
  };

  return (
    <div className="container py-4">
      <h3>{editData ? 'Edit' : 'Add'} Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="form-control mb-2" type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <select className="form-select mb-2" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button className="btn btn-primary">{editData ? 'Update' : 'Add'} Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
