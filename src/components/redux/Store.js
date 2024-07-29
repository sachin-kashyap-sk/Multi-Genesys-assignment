import { configureStore } from "@reduxjs/toolkit";
import Employees from "./HomeSlice";
export const Store = configureStore({
  reducer: {
    Employees: Employees,
  },
});
