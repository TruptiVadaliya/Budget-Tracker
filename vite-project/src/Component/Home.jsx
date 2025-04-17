import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../Redux/BudgetSlice';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const { transactions, totalIncome, totalExpense } = useSelector((state) => state.budget);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Budget Tracker</h2>
                <Link className="btn btn-success" to="/add">Add Transaction</Link>
            </div>
            <div className="row my-3">
                <div className="col"><div className="alert alert-success">Income: ₹{totalIncome}</div></div>
                <div className="col"><div className="alert alert-danger">Expense: ₹{totalExpense}</div></div>
            </div>
            <ul className="list-group">
                {transactions.map(t => (
                    <li key={t.id} className={`list-group-item d-flex justify-content-between align-items-center ${t.type === 'income' ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                        {t.description} - ₹{t.amount}
                        <div>
                            <button className="btn btn-sm btn-warning me-2" onClick={() => navigate(`/edit/${t.id}`)}>Edit</button>
                            <button className="btn btn-sm btn-dark" onClick={() => handleDelete(t.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
