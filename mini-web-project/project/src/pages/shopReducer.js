export const SHOP_INIT = {
    products: [],
    query: "",
    loading: false,
    error: "",
}

export function shopReducer(state, action){
    switch(action.type){
        case "LOAD_START":
            return {...state, loading: true, error: ""}
        
        case "LOAD_SUCCESS":
            return {...state, loading: false, products: action.payload}

        case "LOAD_ERROR":
            return {...state, loading: false, error: action.payload || "ОШИБКА"}

        case "SET_QUERY":
            return {...state, query: action.payload}
        
        case "CLEAR_QUERY":
            return {...state, query:""}
        
        default: return state
    }
}