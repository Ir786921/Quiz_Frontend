import { createSlice } from "@reduxjs/toolkit";

const CamPermission = createSlice({
    name : "CameraPer" ,
    initialState :{
        value : false
    },
    reducers :{

        allowed : (state,actions) =>{
             state.value = actions
        }

    }

})