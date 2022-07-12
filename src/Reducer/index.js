import { combineReducers } from "redux"
const intial=[]

const Reducer1=(state=intial,action)=>{

    if(action.type==='SelectProduct'){
        console.log('hello')
        return [...state,action.payload]
    }
    else{
        return state
    }

}
 const Final=combineReducers({
    finals:Reducer1
 })
 export default Final