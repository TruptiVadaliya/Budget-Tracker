import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../src/Redux/BudgetSlice"; // This is correct

const store = configureStore({
  reducer: {
    budget: budgetReducer, // ✅ Use the imported reducer, NOT budgetSlice.reducer
  },
});

store.subscribe(() => {
  localStorage.setItem("budgetAppState", JSON.stringify(store.getState()));
});

export default store;
