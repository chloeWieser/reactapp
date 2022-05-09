import {ADD_TO_BOARD} from '../actions/types'
// []
//we wire this up by importing this into the reducers index.js, to combine it
const boardReducer = (state, action) => {

    //initialize our state 

    if(state === undefined){
        state = {
            boardItems: [],  //[{}]
            numberOfItems: 0, 
        }
    }


    switch(action.type){

        case ADD_TO_BOARD: 
            
            let newBoardItems = [...state.boardItems] //copying whatever is in state 
            newBoardItems.push({...action.photo, quantity: 1})


            return {
                ...state,
                boardItems: newBoardItems,
                numberOfItems: state.numberOfItems + 1
            }

        default:
            return state
    }
}


export default boardReducer