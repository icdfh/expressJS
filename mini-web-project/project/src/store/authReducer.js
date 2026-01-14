export const AUTH_INIT ={
    isAuth: Boolean(localStorage.getItem("auth"))
}

export function authReducer(state, action){
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("auth", "true")
            return {...state, isAuth: true}
        case "LOGOUT":
            localStorage.removeItem("auth")
            return {...state, isAuth: false}
        
        default:
            return state
    }

}