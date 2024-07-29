import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendApi = "https://669b3f09276e45187d34eb4e.mockapi.io";
export const EmployeesList = createAsyncThunk("api/v1/employee", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      config: { withCredentials: true },
    };
    const { data } = await axios.get(`${backendApi}/api/v1/employee/`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const EmployeesGetById = createAsyncThunk(
  "api/v1/employee/:id",
  async (data) => {
    try {
      const config = {
        header: {
          "content-Type": "application/json",
        },
        config: { withCredentials: true },
      };
      const { data: value } = await axios.get(
        `${backendApi}/api/v1/employee/${data.id}`,
        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const AddEmployee = createAsyncThunk(
  "api/v1/employee/add",
  async (data) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
        config: { withCredentials: true },
      };

      const { data: value } = await axios.post(
        `${backendApi}/api/v1/employee`,
        { ...data },
        config
      );

      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const EditEmployeeById = createAsyncThunk(
  "api/v1/employee/edit",
  async (data) => {
    try {
      const config = {
        header: {
          "content-Type": "application/json",
        },
        config: { withCredentials: true },
      };
      const { data: value } = await axios.get(
        `${backendApi}/api/v1/employee/${data.id}`,
        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const UpdateEmployee = createAsyncThunk(
  "api/v1/employee/update:id",
  async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        config: { withCredentials: true },
      };

      const { data: value } = await axios.put(
        `${backendApi}/api/v1/employee/${data.id}`,
        { ...data },
        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const EmployeeCountry = createAsyncThunk("api/v1/country", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      config: { withCredentials: true },
    };
    const { data } = await axios.get(`${backendApi}/api/v1/country`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const DeleteEmployee = createAsyncThunk(
  "api/v1/employee/delete/:id",
  async (data) => {
    try {
      const config = {
        header: {
          "content-Type": "application/json",
        },
        config: { withCredentials: true },
      };
      const { data: value } = await axios.delete(
        `${backendApi}/api/v1/employee/${data}`,
        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
