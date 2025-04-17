import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("budgetAppState"))?.budget || {
    transactions: [],
    totalIncome: 0,
    totalExpense: 0,
};

const updateSummary = (state) => {
    state.totalIncome = state.transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    state.totalExpense = state.transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);
};

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
            updateSummary(state);
        },
        deleteTransaction: (state, action) => {
            state.transactions = state.transactions.filter(t => t.id !== action.payload);
            updateSummary(state);
        },
        editTransaction: (state, action) => {
            const index = state.transactions.findIndex(t => t.id === action.payload.id);
            if (index !== -1) state.transactions[index] = action.payload;
            updateSummary(state);
        },
    },
});

export const { addTransaction, deleteTransaction, editTransaction } = budgetSlice.actions;
export default budgetSlice.reducer;
