import { createSlice } from "@reduxjs/toolkit";
import {
  EmployeesList,
  EmployeesGetById,
  AddEmployee,
  EditEmployeeById,
  UpdateEmployee,
  EmployeeCountry,
  DeleteEmployee,
} from "../api/EmployeesList";

const initialState = {
  EmployeesData: [
    {
      id: "",
      name: "",
      emailId: "",
      mobile: "",
      country: "",
      state: "",
      district: "",
    },
  ],
  country: [],
  employeeDetail: [],
  editEmployee: null,
  deleteEmployee: null,
  loading: false,
  error: null,
  search: "",
  showModal: false,
};
const HomeSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    openModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(EmployeesList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(EmployeesGetById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(AddEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(EditEmployeeById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UpdateEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(EmployeeCountry.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(DeleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(EmployeesList.fulfilled, (state, action) => {
      state.pending = false;
      state.EmployeesData = action.payload;
    });

    builder.addCase(EmployeesGetById.fulfilled, (state, action) => {
      state.pending = false;
      state.employeeDetail = action.payload;
    });

    builder.addCase(AddEmployee.fulfilled, (state, action) => {
      state.pending = false;
      state.EmployeesData.push(action.payload);
    });

    builder.addCase(EditEmployeeById.fulfilled, (state, action) => {
      state.pending = false;
      state.editEmployee = action.payload;
    });
    builder.addCase(UpdateEmployee.fulfilled, (state, action) => {
      state.pending = false;
      state.EmployeesData.push(action.payload);
    });

    builder.addCase(EmployeeCountry.fulfilled, (state, action) => {
      state.pending = false;
      state.country = action.payload;
    });

    builder.addCase(DeleteEmployee.fulfilled, (state, action) => {
      state.pending = false;
      const index = state.EmployeesData.findIndex(
        (item) => item.id === action.payload.id
      );
      state.EmployeesData.splice(index, 1);
    });

    builder.addCase(EmployeesList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(EmployeesGetById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(AddEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(EditEmployeeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(UpdateEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(EmployeeCountry.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(DeleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const selectedModal = (state) => state.Employees.showModal;
export const { setSearch, openModal } = HomeSlice.actions;
export default HomeSlice.reducer;
