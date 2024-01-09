import { User } from "./app.model";
export const ADD_USER='ADD_USER'
export function addUserReducer(state:User[]=[],action:any){
    switch(action.type){
        case ADD_USER:
            return [...state,action.payload]
        default:
            return state
    }

}