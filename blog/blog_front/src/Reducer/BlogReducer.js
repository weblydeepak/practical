import { createReducer } from "@reduxjs/toolkit"

export const intials ={}

export const BlogReducer = createReducer(intials,(builder)=>{
     
       builder
       .addCase('loadBlogsRequest',(state)=>{
        state.loading= true;
       })
       .addCase('loadBlogsSuccess',(state,action)=>{
        state.loading = false;
        state.Blogs = action.payload;
       })
       .addCase('loadBlogsFailure',(state,action)=>{
        state.loading= false;
        state.error=action.payload;
       })

       .addCase("NewBlogRequest",(state)=>{
        state.loading= true;
       })
       .addCase("NewBlogSuccess",(state,action)=>{
        state.loading= false;
        state.message=action.payload;
       })
       .addCase("NewBlogFailure",(state,action)=>{
        state.loading= false;
        state.error=action.payload;
       })

       .addCase("deletePostRequest",(state)=>{
        state.loading= true;
    })
    .addCase("deletePostSuccess",(state,action)=>{
        state.loading= false;
        state.message=action.payload;
    })
    .addCase("deletePostFailure",(state,action)=>{
        state.loading= false;
        state.error=action.payload;})       
})

export const singleBlogReducer = createReducer(intials, (builder) => {
    builder
        .addCase("blogLoadRequest", (state) => {
            state.loading = true;
        })
        .addCase("blogLoadSuccess", (state, action) => {
            state.loading = false;
            state.Blog = action.payload; 
        })
        .addCase("blogLoadFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});