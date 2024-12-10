const baseURl = "http://localhost:4000/api/Blogs"
export const loadBlogs =()=>async(dispatch)=>{
    try {
        dispatch({type:"loadBlogsRequest"})
        const response = await fetch(`${baseURl}/allBlogs`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        const {data} = await response.json()
      
        dispatch({
            type: "loadBlogsSuccess",
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: "loadBlogsFailure",
            payload: error.message,
        })
        
    }
}

export const createBlog = (title, content, image)=>async(dispatch)=>{
       try {
        dispatch({type:"NewBlogRequest"})
        const response = await fetch(`${baseURl}/addBlog`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({ title, content, image }),
            credentials: 'include',
        })
        const {data} = await response.json()
        dispatch({
            type: "NewBlogSuccess",
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: "NewBlogFailure",
            payload: error.message,
        })
        
    }
}
export const singleBlogLoad = (id) => async (dispatch) => {
    try {
        dispatch({ type: "blogLoadRequest" }); // Correct action type
        const response = await fetch(`${baseURl}/blog/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const { data } = await response.json();
        dispatch({
            type: "blogLoadSuccess",
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: "blogLoadFailure", 
            payload: error.message,
        });
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deletePostRequest",
        });

        console.log("Deleting blog with ID:", id); // Confirm `id` is a string

        const response = await fetch(`http://localhost:4000/api/Blogs/deleteBlog/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to delete the post');
        }

        const { data } = await response.json();

        dispatch({
            type: "deletePostSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deletePostFailure",
            payload: error.message, // Changed to capture error message consistently
        });
    }
};
