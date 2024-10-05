import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice(
    {
        name:"User",
        initialState: null,
        reducers :{
            addUser : (state,actions) => {
                return actions.payload;
            },
            
            removeUser : (state ,actions) =>{
                return null;
            }
        }
    }

    
)
export const{addUser,removeUser} = UserSlice.actions
export default UserSlice.reducer;