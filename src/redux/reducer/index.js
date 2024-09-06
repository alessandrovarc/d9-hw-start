const initialState= {
    favourite: {
        content: [],
    }
}

export const mainReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                favourite:{
                    ...state.favourite,
                    content:state.favourite.content.concat([action.payload])
                }
            }
            
        }
        case 'REMOVE' : {
            const newContent = state.favourite.content.filter((job)=> job._id !== action.payload._id);
            console.log("new content", newContent)
            return {
                ...state,
                favourite: {
                    ...state.favourite,
                    content: newContent
                }
            }
        }
        default:{
            return state  //tutto ciò che è diverso dai case precedenti'ADD' e 'REMOVE' va nel default
        }
        
    }

}
