const baseURl = "http://localhost:4000/api/user"


export const login = (email, password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest"
        });
        const reponse= await fetch(`${baseURl}/login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        })
        const data = await reponse.json();
        dispatch({
            type: "LoginSuccess"
        })
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload:error.response.data.message
        })
    }
 
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LoadUserRequest" });

        const response = await fetch(`${baseURl}/userdata`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json(); 
        if (!response.ok) {
            throw new Error(data.message || "Failed to load user");
        }

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        // Gracefully handle errors
        dispatch({
            type: "LoadUserFailure",
            payload: error?.response?.data?.message || "Could not fetch user data",
        });
    }
};

export const logout= ()=>async(dispatch)=>{
    try {

        await fetch(`${baseURl}/logout`, {
            method: "GET",  
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        window.location.href="/login";
        dispatch({
            type: "LogoutSuccess"
        })
    } catch (error) {
        dispatch({
            type: "LogoutFailure",
            payload:error.response.data.message
        })
        
    }
 
}