import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";
import toast from "react-hot-toast";

// here userLogin are actions

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
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
  async ({ name, email, password, phone, address,image }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/register", { name, email, password, phone, address,image},{
        headers: { "Content-Type": "multipart/form-data" },
      });
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

// for current user 
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        return data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({name,email,password,phone,address,image}, { rejectWithValue }) => {
    console.log("updated data", {name,email,password,phone,address,image});
    try {
      const {response}  = await API.put('/auth/profile-updateprofile',{name,email,password,phone,address,image},{headers: { "Content-Type": "multipart/form-data"}})
        toast.success("Profile updated successfully");
        window.location.replace("/profile");

        return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.response.message) {
        toast.error(error.response.response.message)
        return rejectWithValue(error.response.response.message);
      } else {
        toast.error(error.message)
        return rejectWithValue(error.message);
      }
    }
  }
);


