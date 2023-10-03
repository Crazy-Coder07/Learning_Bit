import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";
import toast from "react-hot-toast";

// here userLogin are actions

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { email, password });
      //store token
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
         toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message)
        return rejectWithValue(error.message);
      }
    }
  }
);

// here userRegister are actions
export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ name,email,password,phone,address},{ rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/register", {name,email,password,phone,address});
      if (data?.success) {
        toast.success("User Registerd Successfully");
        window.location.replace("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message)
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message)
        return rejectWithValue(error.message);
      }
    }
  }
);


