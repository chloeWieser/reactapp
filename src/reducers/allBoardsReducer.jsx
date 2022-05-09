import {ADD_NEW_BOARD} from '../actions/types'
// []
//we wire this up by importing this into the reducers index.js, to combine it
const allBoardsReducer = (state, action) => {

    //initialize our state 

    if(state === undefined){
        state = {
            boardTitles: [],  //[{}]
            numberOfItems: 0, 
        }
    }


    switch(action.type){

        case ADD_NEW_BOARD: 
            
            let newBoard = [...state.boardTitles] //copying whatever is in state 
            newBoard.push({...action.data.title, quantity: 1})


            return {
                ...state,
                boardTitles: newBoard,
                numberOfItems: state.numberOfItems + 1
            }

        default:
            return state
    }
}


export default allBoardsReducer