import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getBean = createAsyncThunk("bean", async (id: string) => {
  if(id){
    const { data } = await instance.get(`/Beans/${id}`);
    return data;
  }
});
