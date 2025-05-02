// import React, {/ } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TransactionForm from './TransactionForm';

const EditTransaction = () => {
  const { id } = useParams();

  // Memoize the transaction lookup for performance
  const transaction = useSelector(state => {
    const transactions = state.transactions || []; // fallback if undefined
    return transactions.find(t => String(t.id) === String(id));
  });

  return (
    <div className="container mt-5">
      {transaction ? (
        <TransactionForm editData={transaction} />
      ) : (
        <h4>Transaction not found!</h4>
      )}
    </div>
  );
};

export default EditTransaction;
