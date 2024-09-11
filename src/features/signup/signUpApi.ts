import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { ISignUp } from "../../models/signUp";

export const signUpRequest = createAsyncThunk("api/users", async (inputValue: ISignUp) => {
    try {
        console.log("inputValue-----",inputValue)
        const response = await API.post("api/users", inputValue)
        console.log("response-----",response)
        if(response.data.success){
        return response.data
        }
        else {

        }
    } catch (error) {
        console.log(error)
    }
})



