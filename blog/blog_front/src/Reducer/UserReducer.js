    import { createReducer } from "@reduxjs/toolkit"


    export const intial ={
        isAuthenticated: false,
    }
    export const userReducer = createReducer(intial,(builder)=>{
        
        builder
        .addCase("LoginRequest",(state)=>{
        state.loading= true; 
        })
        .addCase("LoginSuccess",(state)=>{
            state.loading= false;
            state.isAuthenticated=true;
        })
        .addCase("LoginFailure",(state,action)=>{
            state.loading= false;
            state.error=action.payload;
            state.isAuthenticated=false;
        })

        .addCase("LoadUserRequest",(state)=>{
            state.loading= true;
        })
        .addCase("LoadUserSuccess",(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase("loadUserFailure",(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        })


        .addCase("LogoutRequest",(state)=>{
            state.loading= true;
        })
        .addCase("LogoutSuccess",(state)=>{
            state.loading= false;
            state.isAuthenticated=false;
            state.user=null;
        })
        .addCase("LogoutFailure",(state,action)=>{
            state.loading= false;
            state.error=action.payload;
            state.isAuthenticated=false;
        })
    
    })
